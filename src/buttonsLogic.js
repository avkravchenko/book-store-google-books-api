import { removeItemFromLocal } from "./removeItemFromLocal";
import { addToLocal } from "./toLocalStorage";

function addToCart(item, cart) {
    cart[item] = true;
    console.log(cart);
    addToLocal(cart)
}

function removeFromCart(item, cart) {
    delete cart[item];
    console.log(cart);
    removeItemFromLocal(cart[item])
}

function test(e, cart) {
    if (e.target.classList.contains('main__content__books__card__description__in-cart')) {
      let selectedButton = e.target;
      let clickedBtnId = selectedButton.getAttribute('data-id');
      console.log(clickedBtnId);
  
      selectedButton.classList.toggle('main__content__books__card__description__in-cart--active');
  
      if (!cart[clickedBtnId]) {
        addToCart(clickedBtnId, cart);
        selectedButton.textContent = 'In the cart';
      } else {
        removeFromCart(clickedBtnId, cart);
        selectedButton.textContent = 'Buy now';
      }
    }
  }
  
  export function activeButton(parent, cart) {
    let clickAdded = false;
  
    function handleClick(event) {
      test(event, cart);
    }
  
    function addClick() {
      parent.addEventListener('click', handleClick);
      clickAdded = true;
    }
  
    function removeClick() {
      parent.removeEventListener('click', handleClick);
      clickAdded = false;
    }
  
    if (!clickAdded) {
      addClick();
    }
  
    else {
      removeClick();
    }
  }
  
  
      

    
  