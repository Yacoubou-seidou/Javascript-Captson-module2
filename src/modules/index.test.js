const { itemNumbers } = require('./itemNumbers.js');

describe('Getting number of element from Data', () => {
  test('Get item numbers for homepage', () => {
    const array = [
      {
        name: 'Task-1',
        id: 1,
      },
      {
        name: 'task-2',
        id: 2,
      },
    ];
    const result = itemNumbers(array);
    expect(result).toBe(2);
  });
});