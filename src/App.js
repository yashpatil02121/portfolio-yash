import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import ExtraCurricular from './sections/ExtraCurricular';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="extracurricular">
        <ExtraCurricular />
      </section>
    </main>
    <Footer />
  </Router>
);

export default App;
