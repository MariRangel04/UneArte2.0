import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa as rotas
import Home from './pages/home/Home';

function App() {
  return (
    <Router> {/* Contém as rotas */}
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
