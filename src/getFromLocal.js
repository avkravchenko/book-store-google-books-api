export function getFromLocal(){
    if (localStorage.getItem('shoppingCart') === null) {
        localStorage.setItem('shoppingCart', JSON.stringify({}));
    }
    const response = localStorage.getItem('shoppingCart')
    const data = JSON.parse(response);
    return data;
}   