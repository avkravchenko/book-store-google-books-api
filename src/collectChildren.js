export function collectChildren(element){
    const collection = element.children;

    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('main__content__categories__list__item--active')
    }
}