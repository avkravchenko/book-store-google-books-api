import { booksRendering } from "./booksRendering";
import { activeButton } from "./buttonsLogic";
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
let counter = 0;
let cart = {};

activeButton(pasteBooks, cart) 

categoriesList.addEventListener('click', (e) => {
  removeBooks(pasteBooks)
  collectChildren(categoriesList)
  
  if (newButtonElem) {
    newButtonElem.remove(); 
  }
  
  if (e.target.classList.contains('main__content__categories__list__item')) {
    clickedCategory = e.target.textContent;
    activeCategory = e.target;
    activeCategory.classList.add('main__content__categories__list__item--active');
    newButtonElem = document.createElement('button');
    newButtonElem.innerHTML = "load more";
    buttonHolder.appendChild(newButtonElem);

    fetchData(clickedCategory, startIndex)
    .then(bookItems => booksRendering(pasteBooks, bookItems))
    .catch(error => console.log(error));

    loadMore(newButtonElem, clickedCategory, startIndex, pasteBooks);
    
  }
})

categoriesList.firstElementChild.click();
