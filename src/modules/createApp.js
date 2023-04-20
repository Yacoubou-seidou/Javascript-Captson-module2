import axios from 'axios';

const createApp = () => {
  axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default createApp;