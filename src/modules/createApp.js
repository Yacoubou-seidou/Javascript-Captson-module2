import axios from 'axios';

const createApp = () => {
  axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  });
};

export default createApp;