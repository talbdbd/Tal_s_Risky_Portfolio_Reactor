import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import Contact from './components/Contact';
import './assets/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMePage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<ResumePage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
