const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#picture-cancel');
const commentsList = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const createCommentElement = ({ avatar, name, message }) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  li.innerHTML = `
    <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
    <p class="social__text">${message}</p>
  `;
  return li;
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

function openBigPicture(picture) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  picture.comments.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment));
  });
  commentsList.appendChild(fragment);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  cancelButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  cancelButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { openBigPicture };