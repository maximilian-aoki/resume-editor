import { useState } from 'react';
import { useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';

import Editor from './Editor.jsx';
import Preview from './Preview.jsx';
import '../styles/component-styles/MainApp.css';

export default function MainApp() {
  return (
    <div className="main-container grid">
      <h2>Editor:</h2>
      <Editor />
      <h2>Preview:</h2>
      <Preview />
    </div>
  );
}
