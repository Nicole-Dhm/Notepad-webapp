import { Button, Stack } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';

//make a menu bar to head over the text area
function MenuBarTipTap({ editor }) {
    //force a render on button click
    const [, setForceUpdate] = useState(0); 

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

    //Manually define the header, easier for the onClick command
    return (
        <Stack direction={'row'} spacing={1}>
            <Button
                variant={editor.isActive('bold') ? 'contained' : 'outlined'}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                <FormatBold />
            </Button>

            <Button
                variant={editor.isActive('italic') ? 'contained' : 'outlined'}
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                <FormatItalic />
            </Button>

            <Button
                variant={editor.isActive('underline') ? 'contained' : 'outlined'}
                onClick={() => editor.chain().focus().toggleMark('underline').run()} // correct way
            >
                <FormatUnderlined />
            </Button>
        </Stack>
    );
};

export default MenuBarTipTap;