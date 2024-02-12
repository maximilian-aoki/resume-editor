const userData = {
  nextId: 11,
  resumeData: {
    0: {
      id: 0,
      type: 'resume',
      resumeName: 'Example Resume',
      contentObjectIds: [1],
    },

    1: {
      id: 1,
      type: 'content',
      name: 'Your Name Here',
      position: 'Your Position',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus. Morbi vulputate condimentum nibh sit amet condimentum. Pellentesque tempor eu felis et consequat. Duis quis interdum nulla. Phasellus et urna elementum, vestibulum arcu.',
      location: 'City, Region',
      phone: '(123)-456-7890',
      email: 'example@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/',
      githubUrl: 'https://github.com/',
      educationObjectIds: [2],
      experienceObjectIds: [4, 6],
      skillObjectIds: [8, 9, 10],
    },

    2: {
      id: 2,
      type: 'education',
      institution: 'Institution Name',
      program: 'Program/Degree Name',
      date: 'Month and Year of Completion',
      detailObjectIds: [3],
    },

    3: {
      id: 3,
      type: 'education-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    4: {
      id: 4,
      type: 'experience',
      position: 'Position Title',
      company: 'Name of Company/Institution',
      date: 'Month and Year of Start/Completion',
      detailObjectIds: [5],
    },

    5: {
      id: 5,
      type: 'experience-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    6: {
      id: 6,
      type: 'experience',
      position: 'Position Title',
      company: 'Name of Company/Institution',
      date: 'Month and Year of Start/Completion',
      detailObjectIds: [7],
    },

    7: {
      id: 7,
      type: 'experience-detail',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ultrices, consectetur erat non, tempor tellus.',
    },

    8: {
      id: 8,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },

    9: {
      id: 9,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },

    10: {
      id: 10,
      type: 'skill',
      skill: 'Name of Skill',
      detail: 'Expand on Skill Areas',
    },
  },
};

export default userData;
