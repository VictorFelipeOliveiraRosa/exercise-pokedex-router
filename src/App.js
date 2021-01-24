import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './pages/header';
import Routes from './Routes';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
