import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Método para criar a raiz da aplicação
import App from './App.jsx'; // Importa o componente principal
import './index.css'; // Seu arquivo de estilo (caso necessário)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* O componente App vai renderizar suas rotas */}
  </StrictMode>,
);
