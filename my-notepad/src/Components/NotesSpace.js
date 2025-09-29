import { Box, List, useTheme } from '@mui/material';
import { alpha } from '@mui/material';
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
                    mt: 5,
                    ml: 5,
                    mr: 5,
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Box 
                sx={{
                    width: '100%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.9),
                    borderTopLeftRadius: 5,
                    height: 65,
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.palette.primary.light,
                    fontSize: 25,
                    px: 4,
                    flexShrink: 0,
                    borderBottom: '2px solid',
                    borderBottomColor: theme.palette.primary.main
                }}>
                    <strong>Your Notes</strong>
                </Box>
                <List sx={{ p: 2}}>
                    <Notes />
                </List>
            </Box>
    );
};