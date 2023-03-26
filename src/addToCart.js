import { getFromLocal } from "./getFromLocal";

const data = getFromLocal();

export function addToCart(item, cart){
    if(data === null){
        cart[item] = true;
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } else {
        data[item] = true;
        console.log(data)
        localStorage.setItem('shoppingCart', JSON.stringify(data));
    }
}