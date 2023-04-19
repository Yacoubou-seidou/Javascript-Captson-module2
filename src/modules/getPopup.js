import axios from 'axios';
import displayPopup from './popupWindow';

const url = 'https://cataas.com/api/cats?tags=cute&skip=0&limit=6';

const getPopup = () => {
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    displayPopup(response.data);
  }).catch((error) => {
    console.log(error);
  });
};

export default getPopup;