const defaultData = {
  resumeArr: [0],
  currentResumeId: 0,
  nextId: 10,
  resumeData: {
    0: {
      id: 0,
      type: 'resume',
      currentPanel: 'resume',
      resumeName: 'Example Resume',
      name: 'Your Name Here',
      position: 'Your Position',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus. Morbi vulputate condimentum nibh sit amet condimentum. Pellentesque tempor eu felis et consequat. Duis quis interdum nulla. Phasellus et urna elementum, vestibulum arcu.',
      location: 'City, Region',
      phone: '(123)-456-7890',
      email: 'example@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/',
      githubUrl: 'https://github.com/',
      educationObjectIds: [1],
      experienceObjectIds: [3, 5],
      skillObjectIds: [7, 8, 9],
    },

    1: {
      id: 1,
      parentId: 0,
      type: 'education',
      institution: 'Institution Name',
      program: 'Program/Degree Name',
      date: 'Month and Year of Completion',
      detailObjectIds: [2],
    },

    2: {
      id: 2,
      parentId: 1,
      type: 'education-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    3: {
      id: 3,
      parentId: 0,
      type: 'experience',
      position: 'Position Title',
      company: 'Name of Company/Institution',
      date: 'Month and Year of Start/Completion',
      detailObjectIds: [4],
    },

    4: {
      id: 4,
      parentId: 3,
      type: 'experience-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    5: {
      id: 5,
      parentId: 0,
      type: 'experience',
      position: 'Position Title',
      company: 'Name of Company/Institution',
      date: 'Month and Year of Start/Completion',
      detailObjectIds: [6],
    },

    6: {
      id: 6,
      parentId: 5,
      type: 'experience-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    7: {
      id: 7,
      parentId: 0,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },

    8: {
      id: 8,
      parentId: 0,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },

    9: {
      id: 9,
      parentId: 0,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },
  },
};

export default defaultData;
