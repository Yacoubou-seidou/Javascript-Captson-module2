import display from './displayItems.js';
import displayPopup from './popupWindow.js';
import renderPopup from './renderPopup.js';

const updateView = (element, value) => {
  display(element, value);
  displayPopup(element);
  renderPopup(element);
};

export default updateView;