const conainerMain = document.querySelector('.main');
import {createFiltersStatsTemplate} from "./view/filters-stats.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsListContainerTemplate} from "./view/films-list-container.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreBtnTemplate} from "./view/show-more-btn.js";

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
}

render(conainerMain, createFiltersStatsTemplate(), `beforeend`);
render(conainerMain, createSortTemplate(), `beforeend`);
render(conainerMain, createFilmsListContainerTemplate(), `beforeend`);

const containerFilms = document.querySelector('.films-list__container');


for (let i = 0; i < 6; i++) {
    render(containerFilms, createFilmCardTemplate(), `beforeend`);
}
render(conainerMain, createShowMoreBtnTemplate(), `beforeend`);
console.log('i have no idea what im doing')

