/* eslint-disable no-underscore-dangle */
const { itemNumbers } = require('./itemNumbers.js');

export const container = document.querySelector('.container');
const elementsNumber = document.querySelector('.item-number');
export const card = (_id, index, likes) => `
<article class='card' id='card-${_id}'>
      <div class="cat-image"></div>
      <div class="info"><p>cat ${index}</p>
      <i class="btn fa-regular fa-heart"></i>
      </div>
      <div><p class='rightAlign'><span>${likes}</span> Likes</p></div>
      <button class="add-comment-btn" id="commentBtn-${_id}">Comments</button>
    </article>
`;
const display = (array, likes) => {
  let content = '';
  array.forEach((element, index) => {
    const value = likes.filter((like) => element._id === like.item_id);
    content += card(element._id, index, value[0].likes);
  });
  container.innerHTML = content;
  const result = itemNumbers(array);
  elementsNumber.textContent = `(${result})`;
};

export default display;