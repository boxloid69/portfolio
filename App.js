import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/pagetitleContext';
import Header from './layouts/header';
import SideNav from './layouts/sideNav';
import Footer from './layouts/footer';
import { Box, Toolbar, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const drawerWidth = 240;

function App() {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Define the theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Switch between dark and light modes
      text: {
        primary: darkMode ? '#ffffff' : '#000000', // Ensure text color is white in dark mode
        secondary: darkMode ? '#888888' : '#555555', // Slightly lighter for secondary text
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff', // Set background for the app
      },
    },
    typography: {
      allVariants: {
        color: darkMode ? '#ffffff' : '#000000', // Set default text color for all typography variants
      },
    },
  });

  return (
    <Router>
      <PageTitleProvider>
        {/* Apply the theme globally */}
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Apply the baseline for consistent styling */}
          <div className="App">
            {/* Pass darkMode state and toggleDarkMode to Header */}
            <Header handleDrawerToggle={() => {}} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <SideNav />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                ml: { sm: `${drawerWidth}px` }, // Margin left for the drawer
                p: 3,
                backgroundColor: theme.palette.background.default, // Background updates based on theme
                minHeight: '100vh',
              }}
            >
              <Toolbar /> {/* Push content below AppBar */}
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </div>
        </ThemeProvider>
      </PageTitleProvider>
    </Router>
  );
}

export default App; 
