/* eslint-disable no-underscore-dangle */

const renderPopup = (array) => {
  array.forEach((element) => {
    const catCard = document.getElementById(`commentBtn-${element._id}`);
    catCard.addEventListener('click', () => {
      const popUp = document.getElementById(`popup-${element._id}`);
      const closePopup = document.getElementById(`close-popup-${element._id}`);
      popUp.style.display = 'flex';
      closePopup.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
    });
  });
};
export default renderPopup;