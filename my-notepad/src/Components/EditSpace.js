import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { KeyboardBackspace } from "@mui/icons-material";
import { useState } from "react";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './Main.css';
import MenuBarTipTap from "./MenuBarTiptap";

export default function EditSpace({note, onExit}) {
    //update note information using states, for accepting user input
    const [title, setTitle] = useState(note.title);
    const theme = useTheme();

    let initcontent = '';

    try {
        initcontent = note.content ? JSON.parse(note.content) : '';
    } catch(e) {
        initcontent = note.content || '';
    };

    //directly make an editor instance
    const editor = useEditor({
        extensions: [StarterKit],
        //show the stored note content if it has any
        content: initcontent,
        onUpdate: ({ editor }) => {
            const json = editor.getJSON();
            const jsonAsString = JSON.stringify(json);
            //TODO database connection to save the JSON
        }
    });
    return (
        <Box
            component={'main'}
                sx={{
                    flexGrow: 1,
                    border: '2px solid',
                    borderColor: theme.palette.primary.main,
                    borderRadius: 5,
                    mt: 5,
                    ml: 5,
                    mr: 5,
                    bgcolor: theme.palette.background.paper,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: 'column',
                    p: 1
                }}>
                <Box 
                sx={{ 
                    width: '100%',
                    //backgroundColor: alpha(theme.palette.primary.main, 0.9),
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    //color: theme.palette.primary.light,
                    fontSize: 22,
                    pt: 1.5,
                    px: 2,
                    flexShrink: 0,
                    borderBottom: '3px solid',
                    borderBottomColor: theme.palette.primary.main,
                    borderBottomStyle: 'dashed',
                    justifyContent: 'space-between'
                    }}>
                    <Button
                        onClick={onExit}>
                            <KeyboardBackspace />
                    </Button>
                    <Typography fontFamily={'sans-serif'} sx={{ fontWeight: 550, fontSize: 25}}>
                        Edit Space
                    </Typography>
                    {/*Just here to space evenly with space-between */}
                    <Box sx={{ width: 40, height: 40 }}></Box>
                </Box>
                <Stack direction={'row'} gap={1}>
                    <strong>Title:</strong>
                    <TextField
                        value= {title}
                        type='search'
                        variant= 'standard'
                        onChange={(e)=>{setTitle(e.target.value)}}
                        placeholder='Give your Note a Title...'
                        fullWidth
                        size='small'
                        >
                    </TextField>
                </Stack>
                <Stack direction={'column'} >
                    <Box sx={{ flexGrow: 1, border: '2px solid', p:1, height: 600, borderRadius: 2, borderColor: theme.palette.primary.dark }}>
                        <MenuBarTipTap editor = {editor} />
                        <EditorContent editor = {editor} />
                    </Box>
                </Stack>
                <Box> Date: {note.createdAt}</Box>
        </Box>
    )
}