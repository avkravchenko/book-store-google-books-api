import { getFromLocal } from "./getFromLocal";

export function removeItemFromLocal(item) {
    const data = getFromLocal();
    console.log(data)
    /* .then(data => () => {
        
        for (let key in data) {
           if (key === item) {
            localStorage.removeItem('myKey', item);
        }
    }
}) */
}