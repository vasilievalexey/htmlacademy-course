import { validateHashtags, validateComment } from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeUploadForm();
  }
};

function openUploadForm() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUploadForm() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  uploadInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
}

function initUploadForm() {
  uploadInput.addEventListener('change', openUploadForm);
  cancelButton.addEventListener('click', closeUploadForm);

  // Не закрывать по ESC когда фокус в поле ввода
  hashtagInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

  // Валидация
  uploadForm.addEventListener('submit', (evt) => {
    if (!validateHashtags(hashtagInput.value)) {
      evt.preventDefault();
      hashtagInput.setCustomValidity('Некорректные хэш-теги');
      hashtagInput.reportValidity();
      return;
    }
    hashtagInput.setCustomValidity('');

    if (!validateComment(commentInput.value)) {
      evt.preventDefault();
      commentInput.setCustomValidity('Комментарий не более 140 символов');
      commentInput.reportValidity();
      return;
    }
    commentInput.setCustomValidity('');
  });

  hashtagInput.addEventListener('input', () => {
    hashtagInput.setCustomValidity(
      validateHashtags(hashtagInput.value) ? '' : 'Некорректные хэш-теги'
    );
  });

  commentInput.addEventListener('input', () => {
    commentInput.setCustomValidity(
      validateComment(commentInput.value) ? '' : 'Комментарий не более 140 символов'
    );
  });
}

export { initUploadForm };