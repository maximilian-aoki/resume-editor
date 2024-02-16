import { useState } from 'react';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';
import '../styles/component-styles/MainApp.css';

// default data object and data manager
import defaultData from '../utility/defaultData.js';
import DataManager from '../utility/DataManager.js';

// check import from localStorage on refresh
let data;
if (Boolean(localStorage.getItem('data'))) {
  data = JSON.parse(localStorage.getItem('data'));
} else {
  data = defaultData;
}

const dataManager = new DataManager(data);

// handle local storage updates
function setStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

export default function MainApp() {
  const [data, setData] = useState(dataManager.data);

  function handleTogglePanel(e) {
    dataManager.data.resumeData[dataManager.data.currentResumeId].currentPanel =
      e.target.textContent;

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  return (
    <div className="main-container grid">
      <div className="editor-container grid">
        {data.resumeArr.length > 0 ? (
          <h2>Editing: {data.resumeData[data.currentResumeId].resumeName}</h2>
        ) : (
          <h2>No Resumes Created... Yet!</h2>
        )}
        <Editor data={data} onTogglePanel={handleTogglePanel} />
      </div>
      <div className="preview-container grid">
        <h2>Preview</h2>
        <Preview data={data} />
      </div>
    </div>
  );
}
