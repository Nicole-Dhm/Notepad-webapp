import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background:{
            default: 'rgb(150, 167, 141)',
            paper: 'rgba(255, 255, 255, 1)'
        },
        primary: {
            main: 'rgb(150, 167, 141)',
            light:  'rgb(217, 233, 207)',
            dark: 'rgba(70, 95, 78, 1)',
            contrastText: 'rgba(0, 0, 0, 1)',
        },
        accent: {
            main: 'rgba(231, 213, 213, 1)',
        }

    }
})