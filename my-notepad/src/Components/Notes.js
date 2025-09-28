import { ListItem } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Notes(){
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const currentNotes = async() => {
            try {
                const res = await fetch('http://localhost:8080/api/notes');
                const data = await res.json();
                setNotes(data);
                console.log(notes);
            } catch(e) {
                console.error(e);
                }
        };
        currentNotes();
    }, []);
    return(
        <>
        {notes.map((note, index) =>{
            <ListItem key= {index}>{note}</ListItem>
        })}
        </>
    )
}