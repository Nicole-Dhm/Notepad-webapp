import './Main.css';
import NoteSpace from './NotesSpace';
import { Box, Button, Drawer} from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;
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
    <Box sx={{ display: 'flex', height: '100', width: '100%'}}>
      <Box sx={{ flexGrow: 1, p:2 , transition : 'margin 0.3s ease', marginLeft: open ? `${drawerWidth}px`: 0 , height: '100%' }}>
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
          top: 16,
          border: '1.5px solid rgba(238, 192, 192, 1)',
          backgroundColor: 'rgba(112, 71, 71, 1)',
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
            width: 240,
            boxSizing: 'border-box',
            borderRight: '2px solid black',
            transition: 'border-color 0.3s ease',
          }
        }}
      >
        {DrawerContents}
      </Drawer>
    </Box>
    
  );
}

export default MainSite;
