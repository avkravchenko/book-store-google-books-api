import { addToCart } from "./addToCart";
import { getFromLocal } from "./getFromLocal";
import { removeFromCart } from "./removeFromCart";
import { removeFromLocal } from "./removeFromLocal";

let counter = 0;

const indi = document.querySelector('.nav__divs__image__span');

export function handleBtnClick(place, cart) {
  
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
          counter--;
          (counter > 0) ? indi.style.display = 'flex' : indi.style.display = 'none';
          indi.innerHTML = counter;
        } else {
          addToCart(clickedButtonId, cart);
          clickedButton.textContent = "in the cart";
          clickedButton.classList.add('main__content__books__card__description__in-cart--active');
          counter++;
          indi.innerHTML = counter;
          indi.style.display = 'flex';
        }
      }
    }
    // check if place already has an event listener
    if (place.onclick) {
      place.removeEventListener('click', place.onclick);
    }
  
    place.onclick = handleClick;
  }
  
  