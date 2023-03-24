import { booksRendering } from "./booksRendering";
import { collectChildren } from "./collectChildren";
import { fetchData } from "./fetchData";
import { loadMore } from "./loadMore";
import { removeBooks } from "./removeBooks";
import { mySlider } from "./slider";




mySlider();



const buttonHolder = document.querySelector('.main__content__books__wrapper'); 
let newButtonElem = null; 
const pasteBooks = document.querySelector('.main__content__books');
const categoriesList = document.querySelector('.main__content__categories__list');
let clickedCategory = '';
let activeCategory = null;
let startIndex = 0;
const cart = {};





categoriesList.addEventListener('click', (e) => {
  removeBooks(pasteBooks)
  collectChildren(categoriesList)

  if (newButtonElem) {
    newButtonElem.remove(); 
  }
  
  if (e.target.classList.contains('main__content__categories__list__item')) {
    //get category name and highlight it
    clickedCategory = e.target.textContent;
    activeCategory = e.target;
    activeCategory.classList.add('main__content__categories__list__item--active');

    //add "load more" button
    newButtonElem = document.createElement('button');
    newButtonElem.innerHTML = "load more";
    buttonHolder.appendChild(newButtonElem);

    //get data from Google books API and render it
    fetchData(clickedCategory, startIndex)
    .then(bookItems => booksRendering(pasteBooks, bookItems, cart))
    .catch(error => console.log(error));


    loadMore(newButtonElem, clickedCategory, startIndex, pasteBooks, cart);
  }
})

//get data for the first category and render it
categoriesList.firstElementChild.click();

