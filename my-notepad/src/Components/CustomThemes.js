import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        text: {
            primary: 'rgb(0,0,0)'
        },
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

export const darkTheme = createTheme({
    palette: {
        text: {
            primary: 'rgba(230, 230, 230, 1)'
        },
        background: {
            default: 'rgba(37, 37, 37, 1)',
            paper: 'rgba(59, 59, 59, 1)'
        },
        primary: {
            main: 'rgba(129, 129, 129, 1)',
            light: 'rgba(190, 190, 190, 1)',
            dark: 'rgba(31, 31, 31, 1)',
            contrastText: 'rgba(255, 255, 255, 1)'
        },
        accent: {
            main: 'rgba(255,255,255,1)'
        },
        shadow: {
            default: 'rgba(0,0,0,0.3)',
            hight: 'rgba(0,0,0,0)'
        }
    }
})

export const themes = {
    default: defaultTheme,
    dark: darkTheme,
};