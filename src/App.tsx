import React from 'react';
import logo from './logo.svg';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { AboutMe } from './layout/section/about me/AboutMe';
import { Skills } from './layout/section/skills/Skills';
import { Portfolio } from './layout/section/portfolio/Portfolio';
import { Contacts } from './layout/section/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
      <GoTopBtn/>
    </div>
  );
}

export default App;
