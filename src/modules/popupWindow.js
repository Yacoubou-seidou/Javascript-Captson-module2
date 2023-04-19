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
  <div class="tags-container" id="tagContainer">
    <div class="tag">${tags[0]}</div>
    <div class="tag">${tags[1]}</div>
    <div class="tag">${tags[3]}</div>
    <div class="tag">${tags[4]}</div>
  </div>
  <div class="popup-desc-container">
    <h2>Owner: ${owner}</h2>
    <h2>Created At: ${createdAt}</h2>
    <h2>Updated At: ${updatedAt}</h2>
  </div>
  <div class="comments-section">
    <h3>Comments</h3>
    <div class="comments-list-${_id}">
      <div>Mia: I love it</div>
      <div>Mia: I love it</div>
      <div>Alex: I'd love to buy it</div>
      <div>Alex: I'd love to buy it</div>
    </div>
    <button class="add-comment-btn" id="commentBtn-${_id}">Add Comment</button>
    <form class="comment-form" id="commentForm-${_id}">
      <input type="text" class="comment-input" id="commenter-name" placeholder="Name">
      <input type="text" class="comment-input" id="comment-text" placeholder="Comment">
      <button type="submit">Add Comment</button>
    </form>
  </div>
</div>
</section>
`;
const displayPopup = (array) => {
  array.forEach((element, index) => {
    const popupHtml = itemPopup(
      // eslint-disable-next-line no-underscore-dangle
      element._id,
      element.tags,
      element.owner,
      element.createdAt,
      element.updatedAt,
      index,
    );
    container.insertAdjacentHTML('afterbegin', popupHtml);
  });
};

export default displayPopup;