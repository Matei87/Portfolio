import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

const App = () => {
  useEffect(() => {
    new WOW({ live: false }).init();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Interests />
      <Contact />
    </>
  );
};

export default App;
