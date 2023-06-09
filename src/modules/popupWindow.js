import { container } from './displayItems.js';

const itemPopup = (_id, tags, owner, createdAt, updatedAt, index) => `
<section class="popup-window" id="popup-${_id}">
<div class="popup-container">
  <span class="close-popup" id="close-popup-${_id}">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#67798E"/>
      </svg>
    </span>
  <div class="popup-cat-image"></div>
  <p class="popup-title">Cat ${index}</p>
  <ul class="tags-container" id="tagContainer">
  ${tags}
  </ul>
  <div class="popup-desc-container">
    <h2>Owner: ${owner}</h2>
    <h2>Created At: ${new Date(createdAt).toLocaleString()}</h2>
    <h2>Updated At: ${new Date(updatedAt).toLocaleString()}</h2>
  </div>
  <div class="comments-section" id="comments">
  <div class="comments-header">
  <h3>Comments <h3 id="commentNumber-${_id}"></h3></h3>
  </div>
  <div class="comments-list" id="commentsList-${_id}"></div>
    <button type="button" id="AddCommentBtn-${_id}">Add a new comment</button>
    <form class="comment-form" id="commentForm-${_id}">
      <input type="text" class="comment-input" id="commenter-name-${_id}" placeholder="Name">
      <input type="text" class="comment-input" id="comment-text-${_id}" placeholder="Comment">
      <button type="submit">Add Comment</button>
    </form>
  </div>
</div>
</section>
`;
const displayPopup = (array) => {
  array.forEach((element, index) => {
    let { owner } = element;
    let tags = '';
    if (owner === 'null') {
      owner = 'No owner';
    }
    element.tags.forEach((el, index) => {
      if (index < 4) {
        tags += `<li class='tag'> ${el}</li>`;
      }
    });
    const popupHtml = itemPopup(
      // eslint-disable-next-line no-underscore-dangle
      element._id,
      tags,
      owner,
      element.createdAt,
      element.updatedAt,
      index,
    );
    container.insertAdjacentHTML('afterbegin', popupHtml);
  });
};

export default displayPopup;