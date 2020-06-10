import React from 'react';
import './App.css';
import ValveList from './components/ValveList';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import SpectList from './components/SpecList';

function App() {
  return (
    <div className="App">
        <Header />
        <SubHeader label='Exhaust'/>
        <SpectList />
        <ValveList />
        <SubHeader label='Intake'/>
        <SpectList />
        <ValveList />
    </div>
  );
}

export default App;
