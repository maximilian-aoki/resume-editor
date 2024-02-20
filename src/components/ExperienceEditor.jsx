export default function ExperienceEditor({
  data,
  onAddCatagory,
  onRemoveCatagory,
  onAddLeaf,
  onRemoveLeaf,
  onTextChange,
}) {
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
                  onChange={onTextChange}
                  data-id={experienceId}
                  data-value="position"
                  value={data.resumeData[experienceId].position}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`company-${index + 1}`}>Company:</label>
                <input
                  id={`company-${index + 1}`}
                  onChange={onTextChange}
                  data-id={experienceId}
                  data-value="company"
                  value={data.resumeData[experienceId].company}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`date-${index + 1}`}>Date:</label>
                <input
                  id={`date-${index + 1}`}
                  onChange={onTextChange}
                  data-id={experienceId}
                  data-value="date"
                  value={data.resumeData[experienceId].date}
                />
              </div>
              <h4>Experience {index + 1} Details:</h4>
              {data.resumeData[experienceId].detailObjectIds.map(
                (detailId, index) => {
                  return (
                    <div key={detailId} className="input-div detail grid">
                      <label htmlFor={`detail-${detailId}`}>
                        Detail {index + 1}:
                      </label>
                      <textarea
                        id={`detail-${detailId}`}
                        onChange={onTextChange}
                        rows={3}
                        data-id={detailId}
                        data-value="detail"
                        value={data.resumeData[detailId].detail}
                      />
                      <button
                        className="remove-detail trash"
                        onClick={onRemoveLeaf}
                        data-parentid={experienceId}
                        data-id={detailId}
                      ></button>
                    </div>
                  );
                },
              )}
              <button
                className="add-detail"
                onClick={onAddLeaf}
                data-type="experience"
                data-parentid={experienceId}
              >
                Add Detail
              </button>
              <button
                className="remove-catagory trash"
                onClick={onRemoveCatagory}
                data-type="experience"
                data-parentid={data.currentResumeId}
                data-id={experienceId}
              ></button>
            </div>
          );
        },
      )}
      <div className="experience entry add-button grid">
        <button
          onClick={onAddCatagory}
          data-type="experience"
          data-parentid={data.currentResumeId}
        >
          Add an Experience
        </button>
      </div>
    </>
  );
}
