import { addToCart } from "./addToCart";
import { counterLogicAdd, counterLogicRemove } from "./counterLogic";
import { getFromLocal } from "./getFromLocal";
import { removeFromCart } from "./removeFromCart";
import { removeFromLocal } from "./removeFromLocal";

const indi = document.querySelector('.nav__divs__image__span');

let initialCounterData = getFromLocal();
let quantityInLocal = Object.keys(initialCounterData).length;

if (initialCounterData) {
  indi.innerHTML = quantityInLocal;
  indi.style.display = 'flex';
} 

if (quantityInLocal === 0) {
  indi.textContent = '';
  indi.style.display = 'none';
}

export function handleBtnClick(place, cart) {
  let counter = 0;
    
    function handleClick(e) {
      const data = getFromLocal();
      
      if(e.target.classList.contains('main__content__books__card__description__in-cart')) {
        const clickedButton = e.target;
        const clickedButtonId = clickedButton.getAttribute('data-id');

        if (data[clickedButtonId]) {
          removeFromCart(clickedButtonId, cart);
          removeFromLocal(clickedButtonId);
          clickedButton.textContent = "Buy now";
          clickedButton.classList.remove('main__content__books__card__description__in-cart--active');
          counter--
          counterLogicRemove(indi)
          
        } else {
          addToCart(clickedButtonId, cart);
          clickedButton.textContent = "in the cart";
          clickedButton.classList.add('main__content__books__card__description__in-cart--active');
          counter++
          counterLogicAdd(indi)
        }
      }
    }
    // check if place already has an event listener
    if (place.onclick) {
      place.removeEventListener('click', place.onclick);
    }
  
    place.onclick = handleClick;
  }
  
  