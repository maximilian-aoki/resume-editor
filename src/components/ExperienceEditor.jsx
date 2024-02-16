export default function ExperienceEditor({ data }) {
  return (
    <>
      {data.resumeData[data.currentResumeId].experienceObjectIds.map(
        (experienceId, index) => {
          return (
            <div key={experienceId} className="experience entry grid">
              <h3>Experience {index + 1}:</h3>
              <div className="input-div grid">
                <label htmlFor={`position-${index + 1}`}>Position:</label>
                <input
                  id={`position-${index + 1}`}
                  data-id={experienceId}
                  data-value="position"
                  value={data.resumeData[experienceId].position}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`company-${index + 1}`}>Company:</label>
                <input
                  id={`company-${index + 1}`}
                  data-id={experienceId}
                  data-value="company"
                  value={data.resumeData[experienceId].company}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`date-${index + 1}`}>Date:</label>
                <input
                  id={`date-${index + 1}`}
                  data-id={experienceId}
                  data-value="date"
                  value={data.resumeData[experienceId].date}
                />
              </div>
              <h4>Experience {index + 1} Details:</h4>
              {data.resumeData[experienceId].detailObjectIds.map(
                (detailId, index) => {
                  return (
                    <div className="input-div detail grid">
                      <label htmlFor={`detail-${detailId}`}>
                        Detail {index + 1}:
                      </label>
                      <textarea
                        id={`detail-${detailId}`}
                        rows={3}
                        data-id={detailId}
                        data-value="detail"
                        value={data.resumeData[detailId].detail}
                      />
                      <button className="remove-detail">X</button>
                    </div>
                  );
                },
              )}
              <button className="add-detail">Add Detail</button>
              <button className="remove-catagory">X</button>
            </div>
          );
        },
      )}
      <div className="experience entry add-button grid">
        <button>Add an Experience</button>
      </div>
    </>
  );
}
