export default class DataManager {
  constructor(dataObj) {
    this.data = dataObj;
  }

  // RESUME ARRAY METHODS

  addResume() {
    const dataCopy = this.data;

    dataCopy.resumeArr.push(dataCopy.nextId);
    dataCopy.currentResumeId = dataCopy.nextId;

    dataCopy.resumeData[dataCopy.nextId] = {
      id: dataCopy.nextId,
      type: 'resume',
      currentPanel: 'Resumes',
      resumeName: 'New Resume',
      name: '',
      position: '',
      summary: '',
      location: '',
      phone: '',
      email: '',
      linkedinUrl: 'https://www.linkedin.com/',
      githubUrl: 'https://github.com/',
      layoutOption: 'Standard',
      fontOption: 'Arial',
      accentOption: '#152238',
      educationObjectIds: [],
      experienceObjectIds: [],
      skillObjectIds: [],
    };

    dataCopy.nextId += 1;
    this.data = dataCopy;
  }

  removeResume(resumeId) {
    const dataCopy = this.data;

    // get the new current resume after deletion (if deleting the currently selected resume)
    if (resumeId === dataCopy.currentResumeId) {
      for (let i = 0; i < dataCopy.resumeArr.length; i += 1) {
        if (dataCopy.resumeArr.length === 1) {
          dataCopy.currentResumeId = null;
          break;
        }
        if (i === dataCopy.resumeArr.length - 1) {
          dataCopy.currentResumeId = dataCopy.resumeArr[i - 1];
          break;
        }
        if (dataCopy.resumeArr[i] === resumeId) {
          dataCopy.currentResumeId = dataCopy.resumeArr[i + 1];
          break;
        }
      }
    }

    // get rid of resumeId from resumeArr
    dataCopy.resumeArr = dataCopy.resumeArr.filter((item) => item !== resumeId);

    // clean up data object to remove all of a resume's descendant ids
    ['educationObjectIds', 'experienceObjectIds', 'skillObjectIds'].forEach(
      (catagory) => {
        dataCopy.resumeData[resumeId][catagory].forEach((objId) => {
          if (dataCopy.resumeData[objId].detailObjectIds) {
            dataCopy.resumeData[objId].detailObjectIds.forEach((detailId) => {
              delete dataCopy.resumeData[detailId];
            });
          }
          delete dataCopy.resumeData[objId];
        });
      },
    );

    // delete the resume id itself and return the data obj
    delete dataCopy.resumeData[resumeId];
    this.data = dataCopy;
  }

  // CATAGORY ARRAY METHODS

  addCatagory(type, parentId) {
    const dataCopy = this.data;

    dataCopy.resumeData[parentId][`${type}ObjectIds`].push(dataCopy.nextId);

    if (type === 'education') {
      dataCopy.resumeData[dataCopy.nextId] = {
        id: dataCopy.nextId,
        parentId: parentId,
        type: 'education',
        institution: '',
        program: '',
        date: '',
        detailObjectIds: [],
      };
    }
    if (type === 'experience') {
      dataCopy.resumeData[dataCopy.nextId] = {
        id: dataCopy.nextId,
        parentId: parentId,
        type: 'experience',
        position: '',
        company: '',
        date: '',
        detailObjectIds: [],
      };
    }
    if (type === 'skill') {
      dataCopy.resumeData[dataCopy.nextId] = {
        id: dataCopy.nextId,
        parentId: parentId,
        type: 'skill',
        skill: '',
        detail: '',
      };
    }

    dataCopy.nextId += 1;
    this.data = dataCopy;
  }

  removeCatagory(type, parentId, catagoryId) {
    const dataCopy = this.data;

    // get rid of catagory id from <type>ObjectIds
    dataCopy.resumeData[parentId][`${type}ObjectIds`] = dataCopy.resumeData[
      parentId
    ][`${type}ObjectIds`].filter((item) => item !== catagoryId);

    // clean up data object to remove all of a resume's descendant ids (unless it is a 'skill')
    if (dataCopy.resumeData[catagoryId].detailObjectIds) {
      dataCopy.resumeData[catagoryId].detailObjectIds.forEach((detailId) => {
        delete dataCopy.resumeData[detailId];
      });
    }

    // delete the resume id itself and return the data obj
    delete dataCopy.resumeData[catagoryId];
    this.data = dataCopy;
  }

  // LEAF ARRAY METHODS (for education and experience)

  addLeaf(type, parentId) {
    const dataCopy = this.data;

    dataCopy.resumeData[parentId].detailObjectIds.push(dataCopy.nextId);

    dataCopy.resumeData[dataCopy.nextId] = {
      id: dataCopy.nextId,
      parentId: parentId,
      type: type,
      detail: '',
    };

    dataCopy.nextId += 1;
    this.data = dataCopy;
  }

  removeLeaf(parentId, detailId) {
    const dataCopy = this.data;

    // get rid of catagory id from detailObjectIds
    dataCopy.resumeData[parentId].detailObjectIds = dataCopy.resumeData[
      parentId
    ].detailObjectIds.filter((item) => item !== detailId);

    // delete the resume id itself and return the data obj
    delete dataCopy.resumeData[detailId];
    this.data = dataCopy;
  }
}
