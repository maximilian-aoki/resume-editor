export default function SkillsEditor({ data }) {
  return (
    <>
      {data.resumeData[data.currentResumeId].skillObjectIds.map((skillId) => {
        return (
          <div key={skillId} className="skill entry grid">
            <p>{data.resumeData[skillId].skill}</p>
            <p>{data.resumeData[skillId].detail}</p>
          </div>
        );
      })}
      <div className="skill entry add-button grid">
        <button>Add a Skill!</button>
      </div>
    </>
  );
}
