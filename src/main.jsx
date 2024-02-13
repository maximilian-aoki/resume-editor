import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp.jsx';

import './styles/reset.css';
import './styles/index.css';

// default data object and data manager
import defaultData from './utility/defaultData.js';
import DataManager from './utility/DataManager.js';

// testing
const dataManager = new DataManager(defaultData);
console.log(dataManager.data);

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
