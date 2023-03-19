import { booksRendering } from "./booksRendering";
import { collectChildren } from "./collectChildren";
import { fetchData } from "./fetchData";
import { removeBooks } from "./removeBooks";
import { mySlider } from "./slider";
mySlider();


const pasteBooks = document.querySelector('.main__content__books');
const categoriesList = document.querySelector('.main__content__categories__list');
let clickedCategory = '';
let activeCategory = null;

categoriesList.addEventListener('click', (e) => {
  removeBooks(pasteBooks)
  collectChildren(categoriesList)
  if (e.target.classList.contains('main__content__categories__list__item')) {
    clickedCategory = e.target.textContent;
    activeCategory = e.target;
    activeCategory.classList.add('main__content__categories__list__item--active');

    fetchData(clickedCategory)
    .then(bookItems => booksRendering(pasteBooks, bookItems))
    .catch(error => console.log(error));
  }
})








