// import itemNumbers from './itemNumbers.js';

const container = document.querySelector('.container');
// const elementsNumber = document.querySelector('.item-number');
const display = (array) => {
  let content = '';
  array.forEach((element, index) => {
    content += ` <article class='card'>
      <div class="cat-image"></div>
      <p>cat ${index}</p>
    </article>`;
  });
  container.innerHTML = content;
  // const result = itemNumbers(array);
  // elementsNumber.textContent = `(${result})`;
};
export default display;