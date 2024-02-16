export default function SkillsEditor({
  data,
  onAddCatagory,
  onRemoveCatagory,
  onTextChange,
}) {
  return (
    <>
      {data.resumeData[data.currentResumeId].skillObjectIds.map(
        (skillId, index) => {
          return (
            <div key={skillId} className="skill entry grid">
              <h3>Skill {index + 1}:</h3>
              <div className="input-div grid">
                <label htmlFor={`skill-${index + 1}`}>Skill:</label>
                <input
                  id={`skill-${index + 1}`}
                  onChange={onTextChange}
                  data-id={skillId}
                  data-value="skill"
                  value={data.resumeData[skillId].skill}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`detail-${index + 1}`}>Detail:</label>
                <input
                  id={`detail-${index + 1}`}
                  onChange={onTextChange}
                  data-id={skillId}
                  data-value="detail"
                  value={data.resumeData[skillId].detail}
                />
              </div>
              <button
                className="remove-catagory"
                onClick={onRemoveCatagory}
                data-type="skill"
                data-parentid={data.currentResumeId}
                data-id={skillId}
              >
                X
              </button>
            </div>
          );
        },
      )}
      <div className="skill entry add-button grid">
        <button
          onClick={onAddCatagory}
          data-type="skill"
          data-parentid={data.currentResumeId}
        >
          Add a Skill
        </button>
      </div>
    </>
  );
}
