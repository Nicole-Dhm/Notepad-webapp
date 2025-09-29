import { ListItem, useTheme, Stack, Box, IconButton, Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import { alpha } from '@mui/material';
import { EditNote, RemoveCircle } from '@mui/icons-material';
import ConfirmDialog from '../Dialogs/ConfirmDialog';

export default function Notes({handleEdit}){
    const [notes, setNotes] = useState([]);
    const theme = useTheme();
    //for the Dialog
    const [open, setOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    
    //get notes for display and iterating
    const currentNotes = async() => {
        try {
            const res = await fetch('http://localhost:8080/api/notes');
            if(!res.ok) throw new Error ('featch: this broke');
            const data = await res.json();
            setNotes(data);
        } catch(e) {
            console.error(e);
            }
    };
    useEffect(()=> {
        currentNotes();
    }, []) 

    //Deleting a note
    const handleDelete = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/api/notes/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error ('Delete fetch failed')
            currentNotes();
        } catch(e) {
            console.error(e)
        }
    }
    
    return(
        <>
        {/*Generate the List Items I pop back in in the NotesSpace */}
        {notes.map((note) =>(
            <ListItem 
            key= {note.id}
            sx={{
                border: '2px solid',
                borderColor: theme.palette.primary.dark,
                backgroundColor: alpha(theme.palette.primary.main, 0.3),
                borderRadius: 2,
                height: 100,
                mb: 2,
                pt: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                px: 2,
                position: 'relative'
            }}>
            <Stack direction={'column'} gap={1} sx={{ flexGrow: 1}}>
                <strong>{note.title}</strong>
                {note.content}
            </Stack>
            <Box sx={{
                fontSize: 12,
                alignSelf: 'flex-end'
            }}>
                {/*Custom Date Time format, Timestamp will become dynamic later */}
                <strong>
                Date: {new Date(note.createdAt).toLocaleString('en-GB',{
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                })}
            </strong>
            </Box>
            <IconButton onClick={() => handleEdit(note)}>
                <EditNote />
            </IconButton>
            <Tooltip title= 'Delete Note'>
                {/*Setting the active note and delegating the deletion to the confirm dialog */}
                <IconButton
                    onClick={()=> {setSelectedNote(note.id); setOpen(true)}}
                    sx={{
                        cursor: 'pointer'
                    }}>
                    <RemoveCircle
                        sx={{
                            color: theme.palette.primary.dark,
                            position: 'absolute',
                            top: 2,
                            right: 2,
                        }}/>
                </IconButton>
            </Tooltip>
            </ListItem>
        ))}

        <ConfirmDialog
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={() =>{ handleDelete(selectedNote); setOpen(false)}}
            title= 'Delete Note'
            input='This is irreversible, the note will be lost. Do you wish to continue?'
        ></ConfirmDialog>
        </>
    )
}