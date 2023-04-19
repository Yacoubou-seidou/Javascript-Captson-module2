/* eslint-disable no-underscore-dangle */
import itemNumbers from './itemNumbers.js';

export const container = document.querySelector('.container');
const elementsNumber = document.querySelector('.item-number');
export const card = (_id, index) => `
<article class='card' id='card-${_id}'>
      <div class="cat-image"></div>
      <p>cat ${index}</p>
    </article>
`;
const display = (array) => {
  let content = '';
  array.forEach((element, index) => {
    content += card(element._id, index);
  });
  container.innerHTML = content;
  const result = itemNumbers(array);
  elementsNumber.textContent = `(${result})`;
};

export default display;