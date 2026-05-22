import { openBigPicture } from './gallery.js';

function renderPictures(pictures) {
  const template = document.querySelector('#picture');
  const container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const element = template.content.cloneNode(true);

    element.querySelector('.picture__img').src = picture.url;
    element.querySelector('.picture__likes').textContent = picture.likes;
    element.querySelector('.picture__comments').textContent = picture.comments.length;

    element.querySelector('.picture').addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(picture);
    });

    fragment.appendChild(element);
  });

  container.appendChild(fragment);
}

export { renderPictures };