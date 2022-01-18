import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// import component
import Navbar from './components/Navbar';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = { <Home /> } />
        <Route path = "/about" element = { <About /> } />
        {/* <Route path = "/projects" element = { <Projects /> } /> */}
        <Route path = "/contact" element = { <Contact /> } />
        <Route path = "*" element = { <Error /> } />
      </Routes>
    </Router>
  )
};

export default App;

