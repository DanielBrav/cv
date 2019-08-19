import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div className="organize">
        <div className="headerDiv">
          <Header />
        </div>
        <div className="contentDiv">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
