export default function EducationEditor({ data }) {
  return (
    <>
      {data.resumeData[data.currentResumeId].educationObjectIds.map(
        (educationId) => {
          return (
            <div key={educationId} className="education entry grid">
              <p>{data.resumeData[educationId].institution}</p>
              <p>{data.resumeData[educationId].program}</p>
              <p>{data.resumeData[educationId].date}</p>
              {data.resumeData[educationId].detailObjectIds.map((detailId) => {
                return <p key={detailId}>{data.resumeData[detailId].detail}</p>;
              })}
            </div>
          );
        },
      )}
      <div className="education entry add-button grid">
        <button>Add an Education!</button>
      </div>
    </>
  );
}
