import { Button, Stack } from '@mui/material';
import { Code, FormatBold, FormatItalic, FormatUnderlined, InsertLink, StrikethroughS, Highlight } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';

//make a menu bar to head over the text area
function MenuBarTipTap({ editor }) {
    //force a render on button click
    const [, setForceUpdate] = useState(0); 
    const theme = useTheme();
    useEffect(() => {
        if (!editor) return;

        const update = () => setForceUpdate((n) => n+1);
        editor.on('selectionUpdate', update);
        editor.on('transaction', update);

        return() => {
            editor.off('selectionUpdate', update);
            editor.off('transaction', update);
        };
    },[editor]);

    if (!editor) return null;

    const buttons = [
        {
            name: 'bold',
            icon: <FormatBold />,
            clickCommand: () => editor.chain().focus().toggleBold().run()
        },
        {
            name: 'italic',
            icon: <FormatItalic />,
            clickCommand: () => editor.chain().focus().toggleItalic().run()
        },
        {
            name: 'underline',
            icon: <FormatUnderlined />,
            clickCommand: () => editor.chain().focus().toggleMark('underline').run() //correct toggle command for non standard marks
        },
        {
            name: 'strike',
            icon: <StrikethroughS />,
            clickCommand: () => editor.chain().focus().toggleMark('strike').run() //same thing, reminder: cannot dynamically construct this command, inconsistent
        },
        {
            name: 'link',
            icon: <InsertLink />,
            clickCommand: () => editor.chain().focus().toggleMark('link').run()
        },
        {
            name: 'code',
            icon: <Code />,
            clickCommand: () => editor.chain().focus().toggleMark('code').run()
        },
        {
            name: 'highlight',
            options: { color: '#b197fc'},
            icon: <Highlight  sx={{ color: '#b197fc'}}/>,
            clickCommand: () => editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()
        }
    ]
    //Dynamically map buttons to allow styling outside and no repitions 
    return (
        <Stack direction={'row'} spacing={1} sx={{ borderBottom: '2px solid', borderBottomColor: theme.palette.primary.dark, p: 1, height: 50}}>
            {buttons.map(({name, icon, clickCommand, options }) => (
                <Button
                    sx={{
                        width: 35,
                        height: 35,
                        minWidth: 30 // override MUI default
                    }}
                    key={name}
                    variant={editor.isActive(name, options) ? 'contained': 'outlined'}
                    onClick={clickCommand}>
                    {icon}
                </Button>
            ))}
        </Stack>
    );
};

export default MenuBarTipTap;