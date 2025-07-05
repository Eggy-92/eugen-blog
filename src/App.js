import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TechnicalInfo from './components/TechnicalInfo';
import Footer from './components/Footer';
import './i18n';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/eugen-blog" element={<MainContent />} />
          <Route path="/technical" element={<TechnicalInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;