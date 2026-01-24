// main.js - точка входа приложения
// Здесь импортируем все необходимые модули

// Импорт модуля с данными
import { getPictures } from './data.js';

// Импорт модуля отрисовки (пока закомментирован, т.к. не реализован)
// import { renderPictures } from './render.js';

// Импорт модуля формы загрузки (пока закомментирован)
// import { initUploadForm } from './form.js';

// Импорт модуля галереи (пока закомментирован)
// import { openBigPicture } from './gallery.js';

// Импорт модуля фильтров (пока закомментирован)
// import { initFilters } from './filters.js';

// Импорт модуля API для загрузки с сервера (пока закомментирован)
// import { fetchPictures } from './api.js';


// ======= ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ =======

// Получаем данные о фотографиях
const pictures = getPictures();

// Проверка работы - выводим в консоль
console.log('Загружено фотографий:', pictures.length);
console.log('Данные:', pictures);

// Когда реализуете render.js, раскомментируйте:
// renderPictures(pictures);

// Когда реализуете form.js, раскомментируйте:
// initUploadForm();

// Когда реализуете filters.js, раскомментируйте:
// initFilters();
