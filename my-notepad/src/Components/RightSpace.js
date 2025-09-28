import { Box, useTheme } from "@mui/material";

export default function RightSpace() {
    const theme = useTheme();
    return (
            <Box sx={{
                display: 'flex', 
                flexDirection: 'column', 
                gap: 4, 
                height: '100%',
                p:1
                 }}>
                <Box sx={{ 
                    border: '2px solid',
                    flex: '0 0 250px',
                    borderRadius: 5, 
                    bgcolor: theme.palette.background.paper, 
                    borderColor: theme.palette.primary.main,
                    pl: 2 }}>
                    <h3> Calendar </h3>
                </Box>

                <Box sx={{ 
                    border: '2px solid', 
                    flex: '1 1 auto',
                    borderRadius: 5, 
                    color: theme.palette.primary.contrastText,
                    bgcolor: theme.palette.background.paper, 
                    borderColor: theme.palette.primary.main,
                    pl:2 }}>
                    <h3> Timer </h3>
                </Box>
            </Box>
    );
};