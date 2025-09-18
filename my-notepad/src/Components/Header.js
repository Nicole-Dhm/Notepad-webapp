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
                }}>
                <h1 style={{ margin: 0 }}>Melonotes</h1>
            </Box>
        </ThemeProvider>
    )
}