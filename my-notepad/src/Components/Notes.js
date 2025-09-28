import { ListItem, useTheme, Stack, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Notes(){
    const [notes, setNotes] = useState([]);
    const theme = useTheme();
    useEffect(() => {
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
        currentNotes();
    }, []);

    return(
        <>
        {/*Generate the List Items I pop back in in the NotesSpace */}
        {notes.map((note) =>(
            <ListItem 
            key= {note.id}
            sx={{
                border: '2px solid',
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                height: 100,
                mb: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2
            }}>
            <Stack direction={'column'} gap={2} sx={{ flexGrow: 1}}>
                <strong>{note.title}</strong>
                {note.content}
            </Stack>
            <Box sx={{
                fontSize: 12,
                alignSelf: 'flex-start'
            }}>
                {/*Custom Date Time format, Timestamp will become dynamic later */}
                <strong>
                {new Date(note.createdAt).toLocaleString('en-GB',{
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
            </ListItem>
        ))}
        </>
    )
}