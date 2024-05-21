import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content" style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
