import './Main.css';
import NoteSpace from './NotesSpace';
import { Box, Button, Drawer, useTheme} from '@mui/material';
import { useState } from 'react';
import Header from './Header';
import { DoubleArrow } from '@mui/icons-material';
import RightSpace from './RightSpace';
import EditSpace from './EditSpace';
import  { motion, AnimatePresence } from 'framer-motion';

const drawerWidth = 350;
//core Site, the backdrop to my SPA
function MainSite() {
  const [ open, setOpen] = useState(true); //states for drawer later
  const [ editing, setEditing ] = useState(null); //using this to swicth between components

  const handleCreateNote = () => setEditing({ id: 0, title: '', content: '', createdAt: new Date().toLocaleString()});
  const handleEditNote = (note) => setEditing(note);
  const handleExit = () => setEditing(null);
  
  //function to modify more expandable and more reliable 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContents = (
    <Box>Im a Box</Box>
  );
  const theme = useTheme();
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', bgcolor: theme.palette.background.default}}>
        <Box sx={{ flexShrink: 0, zIndex: 1400, alignContent: 'center'}}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, width: '100%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, p:2 , transition : 'margin 0.3s ease', marginLeft: open ? `${drawerWidth}px`: 0 , height: '100%' }}>
            <AnimatePresence mode={'wait'}>
              { editing ? (
                <motion.div
                  key={'edit'}
                  initial= {{ opacity: 0, x: 50 }}
                  animate= {{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ display: 'flex', width: '100%', height: '100%', flexGrow: 1 }}
                  >
                  <EditSpace note={editing} onExit={handleExit}/>
                </motion.div>
              ): (
                <motion.div
                  key={'notes'}
                  initial={{ opacity: 1, x: 50 }}
                  animate= {{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ display: 'flex', width: '100%', height: '100%', flexGrow: 1 }}
                  >
                  <NoteSpace handleCreate={handleCreateNote} handleEdit={handleEditNote} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          
          {/* Drawer in here cause that's lowkey easier */}
          {/* Toggle button */}
          <Button
            variant='contained'
            onClick={toggleDrawer(!open)}
            sx={{ 
              position: 'fixed', 
              height: 50,
              width: 100,
              minWidth: 0,
              pl: 7,
              fontSize: '0.7rem',
              top: 72,
              border: '2px solid',
              borderColor: theme.palette.primary.main,
              borderLeft: 'none',
              outline: 'none',
              backgroundColor: theme.palette.background.paper,
              left: open ? `calc(${drawerWidth}px - 50px)` : -50,
              borderRadius: 20,
              //zIndex: 1300, just embrace it ig
              transition: 'left 0.3s ease',
              '&hover': {
                backgroundColor: theme.palette.primary.dark,
                cursor: 'pointer',
              }
            }}
          >
            <DoubleArrow style={{ 
              color: theme.palette.primary.main,
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
                boxShadow: 2,
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

          <Box sx={{ flexShrink: 0, minWidth: 400, height: '100%', p: 2, boxSizing: 'border-box'}}>
            <RightSpace />
          </Box>
        </Box>
      </Box>
    
  );
}

export default MainSite;
