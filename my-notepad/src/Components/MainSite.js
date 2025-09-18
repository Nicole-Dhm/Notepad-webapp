import './Main.css';
import NoteSpace from './NotesSpace';
import { Box, Button, Drawer, ThemeProvider} from '@mui/material';
import { useState } from 'react';
import { theme } from './CustomThemes';
import Header from './Header';

const drawerWidth = 350;
//core Site, the backdrop to my SPA
function MainSite() {
  const [ open, setOpen] = useState(true); //states for drawer later
  
  //function to modify more expandable and more reliable 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContents = (
    <Box>Im a Box</Box>
  );
  return (
    <ThemeProvider theme={ theme }>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
        <Box sx={{ flexShrink: 0, zIndex: 1400, alignContent: 'center'}}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, width: '100%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, p:2 , transition : 'margin 0.3s ease', marginLeft: open ? `${drawerWidth}px`: 0 , height: '100%' }}>
            <NoteSpace />
          </Box>
          
          {/* Drawer in here cause that's lowkey easier */}
          {/* Toggle button */}
          <Button
            variant='contained'
            onClick={toggleDrawer(!open)}
            sx={{ 
              position: 'absolute', 
              maxHeight: 30,
              maxWidth: 45,
              fontSize: 'small',
              top: 80,
              border: '1.5px solid',
              borderColor: theme.palette.accent.main,
              backgroundColor: theme.palette.primary.main,
              left: open ? drawerWidth - 25 : 5,
              borderRadius: 25,
              zIndex: 1300,
              transition: 'left 0.3s ease',
            }}
          >
            <strong>{open ? 'Close' : 'Open'}</strong>
          </Button>
          <Drawer
            variant='persistent'
            anchor='left'
            open={open}
            sx={{
              '& .MuiDrawer-paper':{
                width: drawerWidth,
                boxSizing: 'border-box',
                borderRight: '2px solid',
                borderColor: theme.palette.primary.main,
                transition: 'border-color 0.3s ease',
              }
            }}
          >
            <Box sx={{ ml: 2, mt: 8 }}>
              <h2> Tasks</h2>
              {DrawerContents}
            </Box>
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
    
  );
}

export default MainSite;
