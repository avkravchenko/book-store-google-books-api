import { getFromLocal } from "./getFromLocal";

export function removeFromLocal(item){
    const dataFromLocal = getFromLocal();
    delete dataFromLocal[item];
    localStorage.setItem('shoppingCart', JSON.stringify(dataFromLocal));
}