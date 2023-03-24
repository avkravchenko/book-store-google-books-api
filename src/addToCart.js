
export function addToCart(item, cart){
    cart[item] = true;
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}