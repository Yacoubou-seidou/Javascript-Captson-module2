/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
const renderPopup = (array) => {
  array.forEach((element) => {
    const catCard = document.getElementById(`card-${element._id}`);
    catCard.addEventListener('click', () => {
      const popUp = document.getElementById(`popup-${element._id}`);
      const closePopup = document.getElementById(`close-popup-${element._id}`);
      popUp.style.display = 'flex';
      const addComment = document.getElementById(`commentBtn-${element._id}`);
      const commentForm = document.getElementById(`commentForm-${element._id}`);
      const commentName = document.getElementById(`commenter-name-${element._id}`);
      const commentText = document.getElementById(`comment-text-${element._id}`);
      closePopup.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
      addComment.addEventListener('click', () => {
        commentForm.style.display = 'flex';
        commentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          try {
            fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr34/comments', {
              method: 'POST',
              headers: {
              // eslint-disable-next-line quote-props
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                item_id: element._id,
                username: commentName.value,
                comment: commentText.value,
              }),
            });
            document.getElementById(`commenter-name-${element._id}`).value = '';
            document.getElementById(`comment-text-${element._id}`).value = '';
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
};
export default renderPopup;