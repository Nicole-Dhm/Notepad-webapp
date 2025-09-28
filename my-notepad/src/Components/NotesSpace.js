import { Box, List, ListItem, useTheme } from '@mui/material';
import Notes from './Notes';

export default function NoteSpace() {
    const theme = useTheme();
    return (
            <Box
                component={'main'}
                sx={{
                    flexGrow: 1,
                    border: '2px solid',
                    borderColor: theme.palette.primary.main,
                    borderRadius: 5,
                    p: 2,
                    m: 5,
                    mr: 5,
                    bgcolor: 'background.paper',
                }}>
                <h3>Your Notes</h3>
                <List>
                    <Notes />
                </List>
            </Box>
    );
};