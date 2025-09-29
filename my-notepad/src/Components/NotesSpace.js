import { Box, IconButton, List, Tooltip, Typography, useTheme } from '@mui/material';
import Notes from './Notes';
import { AddToPhotos } from '@mui/icons-material';

export default function NoteSpace({ handleEdit, handleCreate }) {
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
                    p: 1,
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
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
                    px: 3,
                    flexShrink: 0,
                    borderBottom: '3px solid',
                    borderBottomColor: theme.palette.primary.main,
                    borderBottomStyle: 'dashed',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h5' fontFamily='sans-serif' sx={{ fontWeight: 550, fontSize: 25 }}>Your Notes</Typography>
                    <Tooltip title= 'Add a Note'>
                        <IconButton
                            onClick={handleCreate}
                            sx={{
                                color: theme.palette.primary.dark
                            }}>
                            <AddToPhotos />
                        </IconButton>
                    </Tooltip>
                </Box>
                <List sx={{ p: 2, flexGrow: 1, overflowY: 'auto'}}>
                    <Notes handleEdit={handleEdit}/>
                </List>
            </Box>
    );
};