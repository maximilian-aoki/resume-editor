import ResumeEditor from './ResumeEditor';
import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import SkillsEditor from './SkillsEditor';
import StyleEditor from './StyleEditor';

import EditorButtons from './EditorButtons';
import '../styles/component-styles/Editor.css';

export default function Editor({ data, onTogglePanel }) {
  let editorView;
  const currentPanel = data.resumeData[data.currentResumeId].currentPanel;

  if (currentPanel === 'Resumes') {
    editorView = <ResumeEditor data={data} />;
  } else if (currentPanel === 'Education') {
    editorView = <EducationEditor data={data} />;
  } else if (currentPanel === 'Experiences') {
    editorView = <ExperienceEditor data={data} />;
  } else if (currentPanel === 'Skills') {
    editorView = <SkillsEditor data={data} />;
  } else if (currentPanel === 'Style') {
    editorView = <StyleEditor data={data} />;
  }

  return (
    <div className="editor-container">
      <EditorButtons data={data} onTogglePanel={onTogglePanel} />
      <div className="panel-container grid">{editorView}</div>
    </div>
  );
}
