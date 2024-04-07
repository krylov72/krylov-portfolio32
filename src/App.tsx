import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { AboutMe } from './layout/section/about me/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
    </div>
  );
}

export default App;
