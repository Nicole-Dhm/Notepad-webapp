import { Avatar, IconButton, Menu, Tooltip, Box, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { themes } from './CustomThemes';
import { useThemeUpdate } from './ThemeWrapper';

//here the Account Menu, will have the functions like see account info, change themes, 
export default function Settings() {
    const { themeName, setThemeName } = useThemeUpdate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        //toggle behaviour for avatar
        if (open){
            setAnchorEl(null);
        }
        else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Box >
                <Tooltip title='Account settings'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        aria-controls={open ? 'account-menu': undefined}
                        aria-haspopup= 'true'
                        aria-expanded={ open ? 'true': undefined}
                    >
                        <Avatar 
                            sx={{ width: 40, height: 40 }}>
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id= 'account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                disablePortal= { false }
                container={document.body}
                PaperProps={{
                    style: {
                        maxHeight: 500,
                        height: 400,
                        width: 200,
                    }
                }}
            >
                
                <MenuItem>
                    <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 1500 }}>
                        <Select
                        value={themeName}
                        onChange={(e) => setThemeName(e.target.value)}
                        size="small"
                        >
                        {Object.keys(themes).map((key) => (
                            <MenuItem key={key} value={key}>
                            {key}
                            </MenuItem>
                        ))}
                        </Select>
                    </Box>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}