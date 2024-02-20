import PreviewStandard from './PreviewStandard';
import PreviewLeft from './PreviewLeft';
import PreviewRight from './PreviewRight';
import '../styles/component-styles/Preview.css';

export default function Preview({ data }) {
  let previewTemplate, layoutClass, fontStyle;

  // catch the case where there are no resumes
  if (data.resumeArr.length === 0) {
    return <div className={'template-page grid'}></div>;
  }

  const currentView = data.resumeData[data.currentResumeId].layoutOption;
  const currentFont = data.resumeData[data.currentResumeId].fontOption;

  if (currentView === 'Standard') {
    previewTemplate = <PreviewStandard data={data} />;
    layoutClass = 'standard';
  } else if (currentView === 'Vertical Left') {
    previewTemplate = <PreviewLeft data={data} />;
    layoutClass = 'left';
  } else if (currentView === 'Vertical Right') {
    previewTemplate = <PreviewRight data={data} />;
    layoutClass = 'right';
  }

  if (currentFont === 'Arial') {
    fontStyle = { fontFamily: 'Arial, sans-serif' };
  } else if (currentFont === 'Times New Roman') {
    fontStyle = { fontFamily: 'Times New Roman, serif' };
  } else if (currentFont === 'Courier New') {
    fontStyle = { fontFamily: 'Courier New, monospace' };
  }

  return (
    <div className={'template-page ' + layoutClass + ' grid'} style={fontStyle}>
      {previewTemplate}
    </div>
  );
}
