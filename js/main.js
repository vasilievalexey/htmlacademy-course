import { renderPictures } from './render.js';
import { initUploadForm } from './form.js';
import { initFilters } from './filters.js';
import { getData } from './api.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
    initFilters(pictures);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');
    errorMessage.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;text-align:center;padding:10px;z-index:9999';
    errorMessage.textContent = 'Не удалось загрузить фотографии. Попробуйте обновить страницу.';
    document.body.appendChild(errorMessage);
  });

initUploadForm();