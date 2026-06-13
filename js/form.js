import { validateHashtags, validateComment } from './validation.js';
import { initScale, resetScale } from './scale.js';
import { initEffects, resetEffects } from './effects.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const body = document.querySelector('body');
const submitButton = document.querySelector('#upload-submit');

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') closeUploadForm();
};

const showMessage = (template) => {
  const message = template.cloneNode(true);
  body.appendChild(message);

  const closeMessage = () => {
    body.querySelector('.success, .error')?.remove();
    document.removeEventListener('keydown', onMessageKeydown);
  };

  const onMessageKeydown = (evt) => {
    if (evt.key === 'Escape') closeMessage();
  };

  body.querySelector('.success__button, .error__button')
    ?.addEventListener('click', closeMessage);
  body.querySelector('.success, .error')
    ?.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) closeMessage();
    });
  document.addEventListener('keydown', onMessageKeydown);
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
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function initUploadForm() {
  uploadInput.addEventListener('change', () => {
    openUploadForm();
    initScale();
    initEffects();
  });

  cancelButton.addEventListener('click', closeUploadForm);

  hashtagInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

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

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!validateHashtags(hashtagInput.value)) {
      hashtagInput.setCustomValidity('Некорректные хэш-теги');
      hashtagInput.reportValidity();
      return;
    }
    if (!validateComment(commentInput.value)) {
      commentInput.setCustomValidity('Комментарий не более 140 символов');
      commentInput.reportValidity();
      return;
    }

    submitButton.disabled = true;

    sendData(new FormData(uploadForm))
      .then(() => {
        closeUploadForm();
        showMessage(successTemplate);
      })
      .catch(() => {
        showMessage(errorTemplate);
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
}

export { initUploadForm };