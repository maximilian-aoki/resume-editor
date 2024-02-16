import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp.jsx';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <h1>RESUME CREATOR</h1>
    </header>
    <main>
      <MainApp />
    </main>
    <footer>
      <h4>2024 Copyright Maximilian Aoki</h4>
    </footer>
  </React.StrictMode>,
);
