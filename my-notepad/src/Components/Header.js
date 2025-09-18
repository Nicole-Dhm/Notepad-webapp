import { Box, ThemeProvider } from "@mui/material"
import { theme } from "./CustomThemes"

export default function Header() {
    return (
        <ThemeProvider theme = {theme}>
            <Box sx= {{ 
                height: 60, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                backgroundColor: theme.palette.primary.dark, 
                color: theme.palette.primary.light,
                fontFamily: 'Cambria',
                borderBottom: '2px solid',
                boxShadow: '4px 4px 4px rgba(4, 30, 34, 0.3)'
                }}>
                <h1 style={{ margin: 0 }}>Melonotes</h1>
            </Box>
        </ThemeProvider>
    );
};