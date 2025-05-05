import { Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav({ open, onClose }) {
  const isMobile = useMediaQuery('(max-width:768px)');
  const location = useLocation();

  const handleClick = () => {
    if (isMobile) onClose();
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
    >
      <List>
        {['Home', 'Education', 'Projects', 'Contact'].map((text) => {
          const path = text === 'Home' ? '/' : `/${text.toLowerCase()}`;
          return (
            <ListItem 
              button 
              key={text} 
              component={Link} 
              to={path}
              selected={location.pathname === path}
              onClick={handleClick}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'action.selected',
                  borderRight: `3px solid var(--primary-color)`
                }
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}