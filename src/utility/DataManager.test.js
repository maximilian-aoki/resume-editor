import DataManager from './DataManager';
import defaultData from './defaultData';

const dataManager = new DataManager(defaultData);

describe('addResume', () => {
  test('appends id to resumeArr', () => {
    dataManager.addResume();
    expect(dataManager.data.currentResumeId).toBe(10);
    expect(dataManager.data.resumeArr).toHaveLength(2);
  });

  test('creates proper resume id', () => {
    dataManager.addResume();
    expect(dataManager.data.nextId).toBe(12);
    expect(dataManager.data.currentResumeId).toBe(11);
    expect(dataManager.data.resumeData[10].type).toBe('resume');
    expect(dataManager.data.resumeData[11].type).toBe('resume');
  });

  test('add multiple resumes', () => {
    dataManager.addResume();
    dataManager.addResume();
    expect(dataManager.data.nextId).toBe(14);
    expect(dataManager.data.currentResumeId).toBe(13);
    expect(dataManager.data.resumeData[13].type).toBe('resume');
  });
});

describe('removeResume', () => {
  test('remove id from resumeArr', () => {
    dataManager.removeResume(11);
    expect(dataManager.data.resumeArr).toHaveLength(4);
    expect(dataManager.data.nextId).toBe(14);
    expect(dataManager.data.resumeData[11]).toBe(undefined);
  });

  test('change current resume if current gets deleted', () => {
    dataManager.data.currentResumeId = 10;
    dataManager.removeResume(10);

    expect(dataManager.data.resumeArr).toHaveLength(3);
    expect(dataManager.data.nextId).toBe(14);
    expect(dataManager.data.resumeData[10]).toBe(undefined);

    expect(dataManager.data.currentResumeId).toBe(12);
  });

  test('try another change at end of array (current deleted)', () => {
    dataManager.data.currentResumeId = 13;
    dataManager.removeResume(13);

    expect(dataManager.data.resumeArr).toHaveLength(2);
    expect(dataManager.data.nextId).toBe(14);
    expect(dataManager.data.resumeData[13]).toBe(undefined);

    expect(dataManager.data.currentResumeId).toBe(12);
  });
});

describe('addCatagory', () => {
  test('add education to resume 0', () => {
    dataManager.addCatagory('education', 0);
    expect(dataManager.data.resumeData[0].educationObjectIds).toHaveLength(2);
    expect(dataManager.data.nextId).toBe(15);
  });

  test('add skill to resume 12', () => {
    dataManager.addCatagory('skill', 12);
    expect(dataManager.data.resumeData[12].skillObjectIds).toHaveLength(1);
    expect(dataManager.data.nextId).toBe(16);
  });
});

describe('removeCatagory', () => {
  test('remove education entry (1) from resume 0', () => {
    dataManager.removeCatagory('education', 0, 1);
    expect(dataManager.data.resumeData[0].educationObjectIds).toHaveLength(1);
    expect(dataManager.data.resumeData[1]).toBe(undefined);
    expect(dataManager.data.resumeData[2]).toBe(undefined);
    expect(dataManager.data.nextId).toBe(16);
  });
});

describe('addLeaf', () => {
  test('correctly add leaf', () => {
    dataManager.addCatagory('experience', 12);
    dataManager.addLeaf('experience-detail', 16);
    expect(dataManager.data.resumeData[16].detailObjectIds).toHaveLength(1);
    expect(dataManager.data.nextId).toBe(18);
  });
});

describe('removeLeaf', () => {
  test('remove experience detail (16) from 12', () => {
    dataManager.removeLeaf(16, 17);
    expect(dataManager.data.resumeData[16].detailObjectIds).toHaveLength(0);
    expect(dataManager.data.nextId).toBe(18);
  });
});
