import { addToCart } from "./addToCart";
import { counterLogicAdd, counterLogicRemove } from "./counterLogic";
import { getFromLocal } from "./getFromLocal";
import { removeFromCart } from "./removeFromCart";
import { removeFromLocal } from "./removeFromLocal";



const indi = document.querySelector('.nav__divs__image__span');


let initialCounterData = JSON.parse(localStorage.getItem('counter')) ;
if (initialCounterData) {
  indi.innerHTML = initialCounterData;
  indi.style.display = 'flex';
} else {
  indi.innerHTML = '';
  indi.style.display = 'none';
  localStorage.setItem('counter', 0);
}


export function handleBtnClick(place, cart) {
    let counter = 0;
    
    function handleClick(e) {
      const data = getFromLocal();

      if(e.target.classList.contains('main__content__books__card__description__in-cart')) {
        const clickedButton = e.target;
        const clickedButtonId = clickedButton.getAttribute('data-id');
        let counterData = localStorage.getItem('counter');

        if (data[clickedButtonId]) {
          removeFromCart(clickedButtonId, cart);
          removeFromLocal(clickedButtonId);
          clickedButton.textContent = "Buy now";
          clickedButton.classList.remove('main__content__books__card__description__in-cart--active');
          counter--
          counterLogicRemove(counterData, indi)
          
          
        } else {
          addToCart(clickedButtonId, cart);
          clickedButton.textContent = "in the cart";
          clickedButton.classList.add('main__content__books__card__description__in-cart--active');
          counter++
          counterLogicAdd(counter, indi, counterData)
        }
      }
    }
    // check if place already has an event listener
    if (place.onclick) {
      place.removeEventListener('click', place.onclick);
    }
  
    place.onclick = handleClick;
  }
  
  