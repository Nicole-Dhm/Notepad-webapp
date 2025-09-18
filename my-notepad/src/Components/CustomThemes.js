import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background:{
            default: 'rgba(191, 207, 207, 1)',
            paper: 'rgba(255, 255, 255, 1)'
        },
        primary: {
            main: 'rgba(167, 187, 187, 1)',
            light:  'rgb(248, 246, 244)',
            dark: 'rgba(140, 155, 155, 1)',
            contrastText: 'rgba(0, 0, 0, 1)',
        },
        accent: {
            main: 'rgba(255, 255, 255, 1)',
        },
        shadow: {
            default: 'rgba(0,0,0,0.3)',
            high: 'rgba(0,0,0,0)'
        }

    }
})