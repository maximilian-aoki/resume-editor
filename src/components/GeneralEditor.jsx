export default function GeneralEditor({ data }) {
  return (
    <div className="general entry grid">
      <h3>General Info:</h3>
      <div className="input-div grid">
        <label htmlFor={`name`}>Name:</label>
        <input
          id={`name`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="name"
          value={data.resumeData[data.currentResumeId].name}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`position`}>Position:</label>
        <input
          id={`position`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="position"
          value={data.resumeData[data.currentResumeId].position}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`location`}>Location:</label>
        <input
          id={`location`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="location"
          value={data.resumeData[data.currentResumeId].location}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`phone`}>Phone:</label>
        <input
          id={`phone`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="phone"
          value={data.resumeData[data.currentResumeId].phone}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`email`}>Email:</label>
        <input
          id={`email`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="email"
          value={data.resumeData[data.currentResumeId].email}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`linkedinUrl`}>LinkedIn URL:</label>
        <input
          id={`linkedinUrl`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="linkedinUrl"
          value={data.resumeData[data.currentResumeId].linkedinUrl}
        />
      </div>
      <div className="input-div grid">
        <label htmlFor={`githubUrl`}>GitHub URL:</label>
        <input
          id={`githubUrl`}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="githubUrl"
          value={data.resumeData[data.currentResumeId].githubUrl}
        />
      </div>
      <div className="input-div summary grid">
        <label htmlFor={`summary`}>Summary:</label>
        <textarea
          id={`summary`}
          rows={8}
          data-id={data.resumeData[data.currentResumeId]}
          data-value="summary"
          value={data.resumeData[data.currentResumeId].summary}
        />
      </div>
    </div>
  );
}
