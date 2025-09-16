import { Box, List, ListItem } from '@mui/material';

export default function NoteSpace() {
    return (
        <Box
            component={'main'}
            sx={{
                flexGrow: 1,
                border: '2px solid black',
                borderRadius: 5,
                p: 2,
                m: 5,
                mr: 50,
                bgcolor: 'background.paper',
            }}>
            <h3>Your Notes</h3>
            <List>
                <ListItem> I'm a Note </ListItem> 
            </List>
        </Box>
    );
};