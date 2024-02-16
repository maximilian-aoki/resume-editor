export default function ResumeEditor({ data }) {
  return (
    <>
      {data.resumeArr.map((resumeId, index) => {
        return (
          <div key={resumeId} className="resume entry grid">
            <label htmlFor={`resume-${index + 1}`}>Resume {index + 1}: </label>
            <input
              id={`resume-${index + 1}`}
              data-id={resumeId}
              data-value="resumeName"
              value={data.resumeData[resumeId].resumeName}
            />
            <button className="remove-resume">X</button>
          </div>
        );
      })}
      <div className="resume entry add-button">
        <button>Add a Resume</button>
      </div>
    </>
  );
}
