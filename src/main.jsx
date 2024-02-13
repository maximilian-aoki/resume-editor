import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp.jsx';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <h1>HEADER</h1>
    </header>
    <main>
      <h2>MAIN CONTENT</h2>
      <MainApp />
    </main>
    <footer>FOOTER</footer>
  </React.StrictMode>,
);
