export default function StyleEditor({ data, onStyleChange }) {
  return (
    <>
      <div className="style entry grid">
        <h3>Style Options:</h3>
        <div className="input-div grid">
          <label htmlFor="layoutOption">Layout:</label>
          <select
            name="layoutOption"
            id="layoutOption"
            defaultValue={data.resumeData[data.currentResumeId].layoutOption}
            onChange={onStyleChange}
          >
            <option value="Standard">Standard</option>
            <option value="Vertical Left">Vertical Left</option>
            <option value="Vertical Right">Vertical Right</option>
          </select>
        </div>
        <div className="input-div grid">
          <label htmlFor="fontOption">Font:</label>
          <select
            name="fontOption"
            id="fontOption"
            defaultValue={data.resumeData[data.currentResumeId].fontOption}
            onChange={onStyleChange}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>
        <div className="input-div grid">
          <label htmlFor="accentOption">Accent Color:</label>
          <input
            type="color"
            id="accentOption"
            defaultValue={data.resumeData[data.currentResumeId].accentOption}
            onChange={onStyleChange}
          />
        </div>
      </div>
    </>
  );
}
