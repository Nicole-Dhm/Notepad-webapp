import { Box, List, ListItem, ThemeProvider } from '@mui/material';
import { theme } from './CustomThemes';

export default function NoteSpace() {
    return (
        <ThemeProvider theme = { theme }>
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
                    <ListItem> I'm a Note </ListItem> 
                </List>
            </Box>
        </ThemeProvider>
    );
};