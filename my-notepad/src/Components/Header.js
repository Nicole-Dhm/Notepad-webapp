import { Box, Stack } from "@mui/material";
import { Today, QueryBuilder} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Settings from "./SettingsInterface";
import { useState, useEffect} from "react";

//header function
export default function Header() {
    const theme = useTheme();
    // time and date states, pull from local
    const [ time, setTime ] = useState('');
    const [ date, setDate ] = useState('');

    //load time and date on load in
    useEffect(()=>{
        function updateTime() {
            // custom display,no american format
            setTime(new Date().toLocaleTimeString([],{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }
            ));
        };

        function updateDate() {
            setDate( new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }));
        }

        //immediate display
        updateTime();
        updateDate();

        //timed upates 
        const timeInterval = setInterval(updateTime, 1000);
        const dateInterval = setInterval(updateDate, 60000);
        return () => {
            clearInterval(timeInterval);
            clearInterval(dateInterval);
        };
    }, []);
    
    return (
        <Box sx={{
            height: 60,
            position: 'relative'
            }}> 
            <Box sx={{ 
                height: 60,
                width: '100%', 
                position: 'absolute', 
                zIndex: 1600, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'cambria'}}>
                <h1 sx= {{ margin: 0 }}>Melonotes</h1>
            </Box>
            <Box sx= {{ 
                height: 60,
                position: 'absolute',
                width: '100%',
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
                    <Box sx={{ width: 200 }}>
                        <Stack direction={ 'row '} gap={1}>
                            <Today />
                            <span>{date}</span>
                            <QueryBuilder />
                            <span>{time}</span>
                        </Stack>
                    </Box>
                    <Settings />
            </Box>
        </Box>
    );
};