import { addToCart } from "./addToCart";
import { getFromLocal } from "./getFromLocal";
import { removeFromCart } from "./removeFromCart";
import { removeFromLocal } from "./removeFromLocal";





export function handleBtnClick(place, cart) {
    let data = getFromLocal();
  
    function handleClick(e) {
      const clickedButton = e.target;
      const clickedButtonId = clickedButton.getAttribute('data-id');
  
      if (!cart[clickedButtonId]) {
        addToCart(clickedButtonId, cart);
        clickedButton.textContent = "in the cart";
        clickedButton.classList.add('main__content__books__card__description__in-cart--active');
        console.log(cart)
      } else {
        removeFromCart(clickedButtonId, cart);
        removeFromLocal(clickedButtonId);
        clickedButton.textContent = "Buy now";
        clickedButton.classList.remove('main__content__books__card__description__in-cart--active');
        console.log(cart)
      }
  
      if (data[clickedButtonId]){
        removeFromLocal(clickedButtonId);
        clickedButton.classList.remove('main__content__books__card__description__in-cart--active');
      } 
  
    }
  
    // check if place already has an event listener
    if (place.onclick) {
      place.removeEventListener('click', place.onclick);
    }
  
    place.onclick = handleClick;
  }
  
  