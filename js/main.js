// main.js - точка входа приложения

import { getPictures } from './data.js';
import { renderPictures } from './render.js';

// Импорт модуля формы загрузки (пока закомментирован)
// import { initUploadForm } from './form.js';

// Импорт модуля галереи (пока закомментирован)
// import { openBigPicture } from './gallery.js';

// Импорт модуля фильтров (пока закомментирован)
// import { initFilters } from './filters.js';

// Импорт модуля API (пока закомментирован)
// import { fetchPictures } from './api.js';

const pictures = getPictures();
renderPictures(pictures);