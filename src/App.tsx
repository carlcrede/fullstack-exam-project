import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';

function App() {
  return (
    <div className="App bg-[#060D17] h-screen">
      <Header />
      <ItemsContainer />
    </div>
  );
}

export default App;
