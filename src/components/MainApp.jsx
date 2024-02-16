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

  function handleToggleResume(e) {
    const resumeId = Number(e.target.getAttribute('data-id'));

    dataManager.data.currentResumeId = resumeId;

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });

    e.preventDefault();
  }

  function handleTextChange(e) {
    const inputId = e.target.getAttribute('data-id');
    const inputProperty = e.target.getAttribute('data-value');

    dataManager.data.resumeData[inputId][inputProperty] = e.target.value;

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleAddResume() {
    dataManager.addResume();

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleRemoveResume(e) {
    dataManager.removeResume(Number(e.target.getAttribute('data-id')));

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });

    e.stopPropagation();
  }

  function handleAddCatagory(e) {
    const type = e.target.getAttribute('data-type');
    const parentId = Number(e.target.getAttribute('data-parentid'));

    dataManager.addCatagory(type, parentId);

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleRemoveCatagory(e) {
    const type = e.target.getAttribute('data-type');
    const parentId = Number(e.target.getAttribute('data-parentid'));
    const id = Number(e.target.getAttribute('data-id'));

    dataManager.removeCatagory(type, parentId, id);

    console.log('remove');

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleAddLeaf(e) {
    const type = e.target.getAttribute('data-type');
    const parentId = Number(e.target.getAttribute('data-parentid'));

    dataManager.addLeaf(type, parentId);

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleRemoveLeaf(e) {
    const parentId = Number(e.target.getAttribute('data-parentid'));
    const id = Number(e.target.getAttribute('data-id'));

    dataManager.removeLeaf(parentId, id);

    setData({ ...dataManager.data });
    setStorage({ ...dataManager.data });
  }

  function handleStyleChange(e) {
    const property = e.target.getAttribute('id');
    const value = e.target.value;

    dataManager.data.resumeData[dataManager.data.currentResumeId][property] =
      value;

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
        <Editor
          data={data}
          onTogglePanel={handleTogglePanel}
          onToggleResume={handleToggleResume}
          onAddResume={handleAddResume}
          onRemoveResume={handleRemoveResume}
          onAddCatagory={handleAddCatagory}
          onRemoveCatagory={handleRemoveCatagory}
          onAddLeaf={handleAddLeaf}
          onRemoveLeaf={handleRemoveLeaf}
          onTextChange={handleTextChange}
          onStyleChange={handleStyleChange}
        />
      </div>
      <div className="preview-container grid">
        <h2>Preview</h2>
        <Preview data={data} />
      </div>
    </div>
  );
}
