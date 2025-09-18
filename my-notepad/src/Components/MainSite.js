import './Main.css';
import NoteSpace from './NotesSpace';
import { Box, Button, Drawer, ThemeProvider} from '@mui/material';
import { useState } from 'react';
import { theme } from './CustomThemes';
import Header from './Header';
import { DoubleArrow } from '@mui/icons-material';

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
              position: 'fixed', 
              height: 60,
              width: 40,
              minWidth: 0,
              fontSize: '0.7rem',
              top: 72,
              border: '2px solid',
              borderColor: theme.palette.primary.main,
              borderLeft: 'none',
              outline: 'none',
              backgroundColor: theme.palette.background.paper,
              left: open ? `calc(${drawerWidth}px - 2px)` : 0,
              borderRadius: open ? '0 20px 20px 0' : '0 20px 20px 0',
              //zIndex: 1300, just embrace it ig
              transition: 'left 0.3s ease',
              '&hover': {
                backgroundColor: theme.palette.primary.dark,
                cursor: 'pointer',
              }
            }}
          >
            <DoubleArrow style={{ 
              color: theme.palette.primary.dark,
              transform: open ? 'rotate(0deg)': 'rotate(180deg)',
              transition: 'transform 0.3 ease'}}/> 
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
                backgroundColor: theme.palette.background.paper,
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
