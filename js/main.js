// main.js - точка входа приложения

import { getPictures } from './data.js';
import { renderPictures } from './render.js';
import { initUploadForm } from './form.js';

// import { openBigPicture } from './gallery.js';
// import { initFilters } from './filters.js';
// import { fetchPictures } from './api.js';

const pictures = getPictures();
renderPictures(pictures);
initUploadForm();