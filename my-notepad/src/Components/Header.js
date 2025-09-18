import { Box, ThemeProvider } from "@mui/material"
import { theme } from "./CustomThemes"
import { Today } from "@mui/icons-material";

export default function Header() {
    return (
        <ThemeProvider theme = {theme}>
            <Box sx= {{ 
                height: 60, 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center', 
                backgroundColor: theme.palette.primary.dark, 
                color: theme.palette.primary.light,
                fontFamily: 'Cambria',
                borderBottom: '2px solid',
                boxShadow: '4px 4px 4px rgba(4, 30, 34, 0.3)',
                p: 2
                }}>
                    <Box sx={{ width: 40 }}>
                        <Today /> 
                    </Box>
                    <h1 style={{ margin: 0 }}>Melonotes</h1>
                    <Box sx={{ 
                        borderRadius: '50%', 
                        bgcolor: 'white', 
                        height: 40, width: 40, 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: 'black',
                        cursor: 'pointer',
                        }}> 
                        M
                    </Box>
            </Box>
        </ThemeProvider>
    );
};