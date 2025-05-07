import { AppBar, Toolbar, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Icons for light/dark mode
import styles from './Header.module.css';

export default function Header({ handleDrawerToggle, toggleDarkMode, darkMode }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Link to="/" className={styles.brand}>
          <i className="bi bi-code-slash"></i>
          Ahmed Abdullah Hashmi
        </Link>

        {/* Dark Mode Toggle (Switch between icons) */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />} {/* Switch between icons */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
