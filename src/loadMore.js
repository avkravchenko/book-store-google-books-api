import { booksRendering } from "./booksRendering"
import { fetchData } from "./fetchData"


export function loadMore(button, currentCategory, startIndex, place, cart) {
    button.addEventListener('click', () => {
        startIndex += 6;

        fetchData(currentCategory, startIndex)
        .then(data => booksRendering(place, data, cart));
    })
}