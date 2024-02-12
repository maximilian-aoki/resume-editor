import DataManager from './DataManager';
import defaultData from './defaultData';

const dataManager = new DataManager(defaultData);

describe('addResume', () => {
  test('adds resume', () => {
    expect(dataManager.addResume(1, 2)).toBe(3);
  });
});
