const { getCommentsNumber } = require('../__mocks__/comments');

describe('Gets the number of comments', () => {
  test('Should provide the number of comments', () => {
    expect(getCommentsNumber([
      {
        dateCreated: '4/20/2023',
        username: 'Marwan',
        comment: 'Hi there!',
      },
      {
        dateCreated: '4/20/2023',
        username: 'Marwan',
        comment: 'Hi there, Again!',
      },
    ])).toStrictEqual(2);
  });
});