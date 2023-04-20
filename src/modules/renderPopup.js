/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
const commentHtml = (comment, creationDate, username) => `<div>${creationDate} ${username}: ${comment}</div>`;

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
      const commentsList = document.getElementById(`commentsList-${element._id}`);
      closePopup.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
      addComment.addEventListener('click', () => {
        commentForm.style.display = 'flex';
        commentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          try {
            fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr3/comments', {
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
          } catch (error) {
            console.log(error);
          }
          document.getElementById(`commenter-name-${element._id}`).value = '';
          document.getElementById(`comment-text-${element._id}`).value = '';
        });

        try {
          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AsTq65ReD0zP4otrJCr3/comments?item_id=${element._id}`)
            .then((result) => result.json())
            .then((data) => {
              data.forEach((comment) => {
                const htmlToAdd = commentHtml(comment.comment,
                  comment.creationDate,
                  comment.username);
                commentsList.insertAdjacentHTML('afterbegin', htmlToAdd);
              });
            });
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
};
export default renderPopup;