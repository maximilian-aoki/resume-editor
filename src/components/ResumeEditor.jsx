export default function ResumeEditor({
  data,
  onAddResume,
  onRemoveResume,
  onTextChange,
  onToggleResume,
}) {
  return (
    <>
      {data.resumeArr.map((resumeId, index) => {
        return (
          <div
            key={resumeId}
            onClick={onToggleResume}
            className={
              resumeId === data.currentResumeId
                ? 'resume entry active grid'
                : 'resume entry grid'
            }
            data-id={resumeId}
          >
            <label htmlFor={`resume-${index + 1}`} data-id={resumeId}>
              Resume {index + 1}:{' '}
            </label>
            <input
              id={`resume-${index + 1}`}
              onChange={onTextChange}
              data-id={resumeId}
              data-value="resumeName"
              value={data.resumeData[resumeId].resumeName}
            />
            <button
              className="remove-resume"
              data-id={resumeId}
              onClick={onRemoveResume}
            >
              X
            </button>
          </div>
        );
      })}
      <div className="resume entry add-button">
        <button onClick={onAddResume}>Add a Resume</button>
      </div>
    </>
  );
}
