import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { KeyboardBackspace } from "@mui/icons-material";

export default function EditSpace({note, onExit}) {
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
                <Box>Id: {note.id}</Box>
                <Box> Title: {note.title} </Box>
                <Box> Content: {note.content} </Box>
                <Box> Date: {note.createdAt}</Box>
        </Box>
    )
}