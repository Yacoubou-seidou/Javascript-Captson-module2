import axios from 'axios';
import display from './displayItems.js';
import renderPopup from './renderPopup.js';

const container = document.querySelector('.container');

const getItemsListe = () => {
  axios.get('https://cataas.com/api/cats?tags=cute&skip=0&limit=6', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    display(response.data);
    renderPopup(response.data);
  }).catch((error) => {
    container.textContent = error.message;
  });
};

export default getItemsListe;