let counter = 0;

function getCommentsNumber(comments) {
  for (let i = 0; i < comments.length; i += 1) {
    counter += 1;
  }
  return counter;
}

exports.getCommentsNumber = getCommentsNumber;