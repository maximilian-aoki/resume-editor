export default function EditorButtons({ data, onTogglePanel }) {
  const buttonRenders = [
    'Resumes',
    'Education',
    'Experiences',
    'Skills',
    'Style',
  ].map((title) => {
    if (data.resumeArr.length === 0) {
      if (title === 'Resumes') {
        return (
          <button key={title} className="active" disabled={true}>
            Resumes
          </button>
        );
      }
      return (
        <button key={title} className="inactive" disabled={true}>
          {title}
        </button>
      );
    }
    if (
      data.resumeArr.length > 0 &&
      data.resumeData[data.currentResumeId].currentPanel === title
    ) {
      return (
        <button key={title} className="active" disabled={true}>
          {title}
        </button>
      );
    }
    return (
      <button key={title} onClick={onTogglePanel}>
        {title}
      </button>
    );
  });

  return <div className="editor-buttons">{buttonRenders}</div>;
}
