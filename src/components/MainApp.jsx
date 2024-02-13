import { useState } from 'react';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';
import '../styles/component-styles/MainApp.css';

// default data object and data manager
import defaultData from '../utility/defaultData.js';
import DataManager from '../utility/DataManager.js';

const dataManager = new DataManager(defaultData);

export default function MainApp() {
  const [data, setData] = useState(dataManager.data);

  function handleTogglePanel(e) {
    dataManager.data.resumeData[dataManager.data.currentResumeId].currentPanel =
      e.target.textContent;
    setData({ ...dataManager.data });
  }

  return (
    <div className="main-container grid">
      <div className="editor-container grid">
        <h2>Editor:</h2>
        <Editor data={data} onTogglePanel={handleTogglePanel} />
      </div>
      <div className="preview-container grid">
        <h2>Preview:</h2>
        <Preview data={data} />
      </div>
    </div>
  );
}
