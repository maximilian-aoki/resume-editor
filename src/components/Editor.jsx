import ResumeEditor from './ResumeEditor';
import GeneralEditor from './GeneralEditor';
import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import SkillsEditor from './SkillsEditor';
import StyleEditor from './StyleEditor';

import EditorButtons from './EditorButtons';
import '../styles/component-styles/Editor.css';

export default function Editor({
  data,
  onTogglePanel,
  onToggleResume,
  onAddResume,
  onRemoveResume,
  onAddCatagory,
  onRemoveCatagory,
  onAddLeaf,
  onRemoveLeaf,
  onTextChange,
}) {
  let editorView;
  let currentPanel = 'Resumes';
  if (data.currentResumeId !== null) {
    currentPanel = data.resumeData[data.currentResumeId].currentPanel;
  }

  if (currentPanel === 'Resumes') {
    editorView = (
      <ResumeEditor
        data={data}
        onAddResume={onAddResume}
        onRemoveResume={onRemoveResume}
        onTextChange={onTextChange}
        onToggleResume={onToggleResume}
      />
    );
  } else if (currentPanel === 'General') {
    editorView = <GeneralEditor data={data} onTextChange={onTextChange} />;
  } else if (currentPanel === 'Education') {
    editorView = (
      <EducationEditor
        data={data}
        onAddCatagory={onAddCatagory}
        onRemoveCatagory={onRemoveCatagory}
        onAddLeaf={onAddLeaf}
        onRemoveLeaf={onRemoveLeaf}
        onTextChange={onTextChange}
      />
    );
  } else if (currentPanel === 'Experiences') {
    editorView = (
      <ExperienceEditor
        data={data}
        onAddCatagory={onAddCatagory}
        onRemoveCatagory={onRemoveCatagory}
        onAddLeaf={onAddLeaf}
        onRemoveLeaf={onRemoveLeaf}
        onTextChange={onTextChange}
      />
    );
  } else if (currentPanel === 'Skills') {
    editorView = (
      <SkillsEditor
        data={data}
        onAddCatagory={onAddCatagory}
        onRemoveCatagory={onRemoveCatagory}
        onTextChange={onTextChange}
      />
    );
  } else if (currentPanel === 'Style') {
    editorView = <StyleEditor data={data} />;
  }

  return (
    <div className="editor-view-container">
      <EditorButtons data={data} onTogglePanel={onTogglePanel} />
      <div className="panel-container grid">{editorView}</div>
    </div>
  );
}
