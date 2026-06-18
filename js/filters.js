import { debounce } from './util.js';
import { renderPictures } from './render.js';

const RANDOM_PICTURES_COUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

let sourcePictures = [];

const getRandomPictures = (pictures) =>
  [...pictures]
    .sort(() => Math.random() - 0.5)
    .slice(0, RANDOM_PICTURES_COUNT);

const getDiscussedPictures = (pictures) =>
  [...pictures].sort((a, b) => b.comments.length - a.comments.length);

const setActiveButton = (button) => {
  document.querySelectorAll('.img-filters__button').forEach((btn) =>
    btn.classList.remove('img-filters__button--active')
  );
  button.classList.add('img-filters__button--active');
};

const onFilterClick = debounce((evt, filterFunction) => {
  setActiveButton(evt.target);
  renderPictures(filterFunction(sourcePictures));
});

const initFilters = (pictures) => {
  sourcePictures = pictures;
  filtersContainer.classList.remove('img-filters--inactive');

  defaultButton.addEventListener('click', (evt) => {
    onFilterClick(evt, (data) => data);
  });

  randomButton.addEventListener('click', (evt) => {
    onFilterClick(evt, getRandomPictures);
  });

  discussedButton.addEventListener('click', (evt) => {
    onFilterClick(evt, getDiscussedPictures);
  });
};

export { initFilters };