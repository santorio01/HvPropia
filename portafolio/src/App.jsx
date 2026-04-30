import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Jeferson Sepulveda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
