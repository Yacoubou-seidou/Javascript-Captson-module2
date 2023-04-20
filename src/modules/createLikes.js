import axios from 'axios';
import getLikes from './getLikes.js';
import 'regenerator-runtime/runtime.js';
import updateView from './updateView.js';

const createLikes = async (element) => {
  const btn = document.querySelectorAll('.btn');
  btn.forEach((el, index) => {
    el.addEventListener('click', async () => {
      const response = await axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr3/likes/', {
        // eslint-disable-next-line no-underscore-dangle
        item_id: element[index]._id,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        const value = await getLikes();
        updateView(element, value);
        createLikes(element);
      }
    });
  });
};
export default createLikes;
