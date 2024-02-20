import { Fragment } from 'react';

export default function PreviewStandard({ data }) {
  const previewData = data.resumeData[data.currentResumeId];
  const colorStyle = { backgroundColor: previewData.accentOption };

  return (
    <>
      <div className="preview-header grid" style={colorStyle}>
        <div className="header-main grid">
          <h2>{previewData.name}</h2>
          <h3>{previewData.position}</h3>
        </div>
        <div className="header-details grid">
          <p className="header-details-location">
            {previewData.location}{' '}
            <span>
              <img src="/home.svg" alt="" />
            </span>
          </p>
          <p className="header-details-phone">
            {previewData.phone}{' '}
            <span>
              <img src="/phone.svg" alt="" />
            </span>
          </p>
          <p className="header-details-email">
            {previewData.email}{' '}
            <span>
              <img src="/email.svg" alt="" />
            </span>
          </p>
          <a href={previewData.githubUrl} className="header-details-github">
            GitHub Profile{' '}
            <span>
              <img src="/github.svg" alt="" />
            </span>
          </a>
          <a href={previewData.linkedinUrl} className="header-details-linkedin">
            LinkedIn Profile{' '}
            <span>
              <img src="/linkedin.svg" alt="" />
            </span>
          </a>
        </div>
      </div>
      <div className="preview-content grid">
        <div className="preview-summary preview-section grid">
          <h4>PROFESSIONAL SUMMARY</h4>
          <hr style={colorStyle} />
          <p>{previewData.summary}</p>
          <img src="/summary.svg" alt="" />
        </div>
        <div className="preview-education preview-section grid">
          <h4>EDUCATION</h4>
          <hr style={colorStyle} />
          <div className="preview-education-entries preview-entry grid">
            {previewData.educationObjectIds.map((educationId) => {
              const educationData = data.resumeData[educationId];

              return (
                <Fragment key={educationId}>
                  <div className="preview-entry-header grid">
                    <p className="preview-entry-header-institution">
                      {educationData.institution}
                    </p>
                    <p className="preview-entry-header-date">
                      {educationData.date}
                    </p>
                  </div>
                  <p className="preview-entry-program">
                    {educationData.program}
                  </p>
                  <ul>
                    {educationData.detailObjectIds.map((detailId) => {
                      const detailData = data.resumeData[detailId];

                      return <li key={detailId}>{detailData.detail}</li>;
                    })}
                  </ul>
                </Fragment>
              );
            })}
          </div>
          <img src="/education.svg" alt="" />
        </div>
        <div className="preview-experience preview-section grid">
          <h4>EXPERIENCE</h4>
          <hr style={colorStyle} />
          <div className="preview-experience-entries preview-entry grid">
            {previewData.experienceObjectIds.map((experienceId) => {
              const experienceData = data.resumeData[experienceId];

              return (
                <Fragment key={experienceId}>
                  <div className="preview-entry-header grid">
                    <p className="preview-entry-header-institution">
                      {experienceData.company}
                    </p>
                    <p className="preview-entry-header-date">
                      {experienceData.date}
                    </p>
                  </div>
                  <p className="preview-entry-program">
                    {experienceData.position}
                  </p>
                  <ul>
                    {experienceData.detailObjectIds.map((detailId) => {
                      const detailData = data.resumeData[detailId];

                      return <li key={detailId}>{detailData.detail}</li>;
                    })}
                  </ul>
                </Fragment>
              );
            })}
          </div>
          <img src="/experience.svg" alt="" />
        </div>
        <div className="preview-skills preview-section grid">
          <h4>SKILLS</h4>
          <hr style={colorStyle} />
          <div className="preview-skill-entries preview-entry grid">
            {previewData.skillObjectIds.map((skillId) => {
              const skillData = data.resumeData[skillId];

              return (
                <div className="preview-skill-entry grid" key={skillId}>
                  <h5>{skillData.skill}</h5>
                  <p>{skillData.detail}</p>
                </div>
              );
            })}
          </div>
          <img src="/skill.svg" alt="" />
        </div>
      </div>
    </>
  );
}
