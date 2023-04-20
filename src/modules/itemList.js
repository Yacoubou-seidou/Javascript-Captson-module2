import axios from 'axios';
import display from './displayItems.js';
import renderPopup from './renderPopup.js';
import displayPopup from './popupWindow.js';
// import getLikes from './getLikes.js';
import createLikes from './createLikes.js';

const container = document.querySelector('.container');

const getItemsListe = async () => {
  // const value = await getLikes();
  axios.get('https://cataas.com/api/cats?tags=cute&skip=0&limit=6', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    display(response.data, '5');
    displayPopup(response.data);
    renderPopup(response.data);
    createLikes(response.data);
  }).catch((error) => {
    container.textContent = error.message;
  });
};

export default getItemsListe;