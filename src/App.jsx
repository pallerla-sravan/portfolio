import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import EasterEgg from './components/ui/EasterEgg';
import { Routes, Route, useLocation } from 'react-router-dom';
import AllProjects from './components/sections/AllProjects';
import Connect from './components/sections/Connect';

function App() {
  const [loading, setLoading] = useState(true);
  const [showConnect, setShowConnect] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 4000);
    const connectShowTimer = setTimeout(() => setShowConnect(true), 15000);
    const connectHideTimer = setTimeout(() => setShowConnect(false), 20000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(connectShowTimer);
      clearTimeout(connectHideTimer);
    };
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen isLoading={loading} />
      </AnimatePresence>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white relative">
        {/* Modern background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('./assets/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)"></div>
        </div>

        <CustomCursor />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Layout>
                  <div className="space-y-0 "> {/* Removed snap scrolling */}
                    <Hero />
                    <About />
                    <Skills /> 
                     <Projects /> 
                     <Testimonials />
                  </div>
                </Layout>
              }
            />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </AnimatePresence>
        
        {showConnect && <Connect />}
        <EasterEgg />
      </div>
    </ThemeProvider>
  );
}

export default App;