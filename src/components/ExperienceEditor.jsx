export default function ExperienceEditor({ data }) {
  return (
    <>
      {data.resumeData[data.currentResumeId].experienceObjectIds.map(
        (experienceId) => {
          return (
            <div key={experienceId} className="experience entry grid">
              <p>{data.resumeData[experienceId].position}</p>
              <p>{data.resumeData[experienceId].company}</p>
              <p>{data.resumeData[experienceId].date}</p>
              {data.resumeData[experienceId].detailObjectIds.map((detailId) => {
                return <p key={detailId}>{data.resumeData[detailId].detail}</p>;
              })}
            </div>
          );
        },
      )}
      <div className="experience entry add-button grid">
        <button>Add an Experience!</button>
      </div>
    </>
  );
}
