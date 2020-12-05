import {createLoadingTemplate} from "./view/loading.js";

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
}

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createLoadingTemplate(), `beforeend`);
console.log('test2');