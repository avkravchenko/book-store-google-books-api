import { booksRendering } from "./booksRendering";
import { collectChildren } from "./collectChildren";
import { fetchData } from "./fetchData";
import { loadMore } from "./loadMore";
import { removeBooks } from "./removeBooks";
import { mySlider } from "./slider";

const buttonHolder = document.querySelector('.main__content__books__wrapper'); 
let newButtonElem = null; 
const pasteBooks = document.querySelector('.main__content__books');
const categoriesList = document.querySelector('.main__content__categories__list');
let clickedCategory = '';
let activeCategory = null;
let startIndex = 0;
const cart = {};

mySlider();

categoriesList.addEventListener('click', (e) => {
 
  
  if (e.target.classList.contains('main__content__categories__list__item')) {
    removeBooks(pasteBooks)
    collectChildren(categoriesList)
    
    if (newButtonElem) {
      newButtonElem.remove(); 
    }

    clickedCategory = e.target.textContent;
    activeCategory = e.target;
    activeCategory.classList.add('main__content__categories__list__item--active');

    newButtonElem = document.createElement('button');
    newButtonElem.innerHTML = "load more";
    newButtonElem.classList.add('main__content__books__wrapper__button')
    buttonHolder.appendChild(newButtonElem);

    fetchData(clickedCategory, startIndex)
    .then(bookItems => booksRendering(pasteBooks, bookItems, cart))
    .catch(error => console.log(error));

    loadMore(newButtonElem, clickedCategory, startIndex, pasteBooks, cart);
  }
})

categoriesList.firstElementChild.click();
