import axios from 'axios';

const createLikes = (element) => {
  const btn = document.querySelectorAll('.btn');
  btn.forEach((el, index) => {
    el.addEventListener('click', () => {
      axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr3/likes/', {
        // eslint-disable-next-line no-underscore-dangle
        item_id: element[index]._id,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  });
};
export default createLikes;
