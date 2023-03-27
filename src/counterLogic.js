import { getFromLocal } from "./getFromLocal";



export function counterLogicAdd (indi) {
    const data = getFromLocal();
    let quantity = Object.keys(data).length;
    indi.innerHTML =  quantity + " ";
    indi.style.display = 'flex';
}

export function counterLogicRemove (indi) {
    const data = getFromLocal();
    let quantity = Object.keys(data).length;
    indi.textContent = quantity;

    if (quantity === 0) {
        indi.textContent = '';
        indi.style.display = 'none';
    }
}