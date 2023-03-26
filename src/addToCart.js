import { getFromLocal } from "./getFromLocal";

export function addToCart(item, cart){
    const data = getFromLocal();
    if(data === null){
        cart[item] = true;
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } else {
        data[item] = true;
        localStorage.setItem('shoppingCart', JSON.stringify(data));
    } 
} 