export default function EducationEditor({
  data,
  onAddCatagory,
  onRemoveCatagory,
  onAddLeaf,
  onRemoveLeaf,
  onTextChange,
}) {
  return (
    <>
      {data.resumeData[data.currentResumeId].educationObjectIds.map(
        (educationId, index) => {
          return (
            <div key={educationId} className="education entry grid">
              <h3>Education {index + 1}:</h3>
              <div className="input-div grid">
                <label htmlFor={`institution-${index + 1}`}>Institution:</label>
                <input
                  id={`institution-${index + 1}`}
                  onChange={onTextChange}
                  data-id={educationId}
                  data-value="institution"
                  value={data.resumeData[educationId].institution}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`program-${index + 1}`}>Program:</label>
                <input
                  id={`program-${index + 1}`}
                  onChange={onTextChange}
                  data-id={educationId}
                  data-value="program"
                  value={data.resumeData[educationId].program}
                />
              </div>
              <div className="input-div grid">
                <label htmlFor={`date-${index + 1}`}>Date:</label>
                <input
                  id={`date-${index + 1}`}
                  onChange={onTextChange}
                  data-id={educationId}
                  data-value="date"
                  value={data.resumeData[educationId].date}
                />
              </div>
              <h4>Education {index + 1} Details:</h4>
              {data.resumeData[educationId].detailObjectIds.map(
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
                        data-parentid={educationId}
                        data-id={detailId}
                      ></button>
                    </div>
                  );
                },
              )}
              <button
                className="add-detail"
                onClick={onAddLeaf}
                data-type="education"
                data-parentid={educationId}
              >
                Add Detail
              </button>
              <button
                className="remove-catagory trash"
                onClick={onRemoveCatagory}
                data-type="education"
                data-parentid={data.currentResumeId}
                data-id={educationId}
              ></button>
            </div>
          );
        },
      )}
      <div className="education entry add-button grid">
        <button
          onClick={onAddCatagory}
          data-type="education"
          data-parentid={data.currentResumeId}
        >
          Add an Education
        </button>
      </div>
    </>
  );
}
