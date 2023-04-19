/* eslint-disable no-underscore-dangle */

const renderPopup = (array) => {
  array.forEach((element) => {
    const catCard = document.getElementById(`card-${element._id}`);
    catCard.addEventListener('click', () => {
      const popUp = document.getElementById(`popup-${element._id}`);
      popUp.style.display = 'flex';
    });
  });
};
export default renderPopup;