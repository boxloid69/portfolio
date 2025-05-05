import { AppBar, Toolbar, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <IconButton edge="end" color="inherit" onClick={handleMenu}>
          <Avatar><AccountCircle /></Avatar>
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Logout (Placeholder)</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}