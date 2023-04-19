import axios from 'axios';
import 'regenerator-runtime/runtime';

export default async () => {
  const response = await axios.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr3/likes/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
