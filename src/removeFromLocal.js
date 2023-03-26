import { getFromLocal } from "./getFromLocal";

export function removeFromLocal(item){
    const dataFromLocal = getFromLocal();

    if (dataFromLocal[item]){
        delete dataFromLocal[item];
        localStorage.setItem('shoppingCart', JSON.stringify(dataFromLocal));
    }
    
}