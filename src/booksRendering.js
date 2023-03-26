import { getFromLocal } from "./getFromLocal";
import { handleBtnClick } from "./buttonsLogic";
import { getStarRating } from "./getStarRating";

export function booksRendering(place, data, cart){
  const dataFromLocal = getFromLocal();

  console.log(data)
    data.forEach(item => {
        const booksCard = document.createElement('div');
        booksCard.classList.add('main__content__books__card');
        const starRating = getStarRating(item.volumeInfo.averageRating);
        if(dataFromLocal) {
        booksCard.innerHTML = `
          <div class="main__content__books__card__image"><img src="${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "/images/default-cover.jpg"}"></div>


          <div class="main__content__books__card__description">
            <div class="main__content__books__card__description__authors">${item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : ''}</div>
            <div class="main__content__books__card__description__title"><h3>${item.volumeInfo.title}</h3></div>

            <div class="main__content__books__card__description__rating">${(item.volumeInfo.averageRating) ? starRating : '' }<span style="color: black"> ${(item.volumeInfo.ratingsCount) ? item.volumeInfo.ratingsCount + ' review': ''}</span></div>

            <div class="main__content__books__card__description__text">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + "..." : ""}</div>
            <div class="main__content__books__card__description__price"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode : ""}</strong></div>

            <div class="main__content__books__card__description__button-container">
            <button data-id =${item.id} class="main__content__books__card__description__in-cart${(dataFromLocal[item.id]) ? ' main__content__books__card__description__in-cart--active' : ''}">${(dataFromLocal[item.id]) ? 'in the cart' : 'Buy now'}</button></div>
          </div>
        `
      } else{
        booksCard.innerHTML = `
        <div class="main__content__books__card__image"><img src="${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "/images/default-cover.jpg"}"></div>
        <div class="main__content__books__card__description">
          <div class="main__content__books__card__description__authors">${item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : 'Authors not found'}</div>
          <div class="main__content__books__card__description__title"><h3>${item.volumeInfo.title}</h3></div>
          
          <div class="main__content__books__card__description__text">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + "..." : "Description not found"}</div>
          <div class="main__content__books__card__description__price"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode : "Price not defined"}</strong></div>
          <div class="main__content__books__card__description__button-container"><button data-id =${item.id} class="main__content__books__card__description__in-cart">Buy now</button></div>
        </div>
        `
      }
        place.appendChild(booksCard)
    })
    
    handleBtnClick(place, cart);
}