import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/pagetitleContext';
import Header from './layouts/header';
import SideNav from './layouts/sideNav';
import Footer from './layouts/footer';
import { Container } from '@mui/material';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <PageTitleProvider>
        <div className="App">
          <Header />
          <SideNav />
          <Container maxWidth="xl" className="main-content">
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Container>
          <Footer />
        </div>
      </PageTitleProvider>
    </Router>
  );
}

export default App;