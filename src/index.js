import { mySlider } from "./slider";
mySlider();

const cart = {};
const checkData = localStorage.getItem('myKey');
const parsedData = JSON.parse(checkData);


const categories = document.querySelectorAll('.main__content__categories__list__item');
let counter = 0;
const numberIndi = document.querySelector('.nav__divs__image__span');


categories.forEach(category => {
  category.style.cursor = "pointer";
  category.addEventListener('click', handleClick);
});

function handleClick(e){
  const clickedCategory = e.target.textContent;
    categories.forEach((item) => {
      item.classList.remove('main__content__categories__list__item--active');
    })
    this.classList.add('main__content__categories__list__item--active');

   
    function fetchingBooksData(clickedCategory) {
      return fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${clickedCategory}"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
      .then(response => response.json())
      .then(data => data)
    }

    function renderBooks(book) {
      const bookConteiner = document.querySelectorAll('.main__content__books__card');
      const bookItems = book.items;
      console.log(bookItems);
      bookConteiner.forEach((conteiner, index) => {
        const item = bookItems[index];
        const cartData = JSON.parse(checkData);
        // here we can try to add some staff for button rendering
        console.log(cartData)
        if (item) {
          conteiner.innerHTML = `
            <div class="main__content__books__card__image"><img src="${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "/images/default-cover.jpg"}"></div>
            <div class="main__content__books__card__description">
              <div class="main__content__books__card__description__authors">${item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : 'Authors not found'}</div>
              <div class="main__content__books__card__description__title"><h3>${item.volumeInfo.title}</h3></div>
              <div class="main__content__books__card__description__rating"></div>
              <div class="main__content__books__card__description__text">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + "..." : "Description not found"}</div>
              <div class="main__content__books__card__description__price">${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode : "Price not defined"}</div>
              <div class="main__content__books__card__description__button-container"><button class="main__content__books__card__description__in-cart">Buy now</button></div>
            </div>
          `;

        } else {
          conteiner.innerHTML = `
            <div class="main__content__books__card__image"><img src="/images/default-cover.jpg"></div>
            <div class="main__content__books__card__description">
              <div class="main__content__books__card__description__authors">Authors not found</div>
              <div class="main__content__books__card__description__title"><h3>Title not found</h3></div>
              <div class="main__content__books__card__description__rating">Rating not found</div>
              <div class="main__content__books__card__description__text">Description not found</div>
              <div class="main__content__books__card__description__price">Price not defined</div>
            </div>
          `;
        }

        
      });

      const buttons = document.querySelectorAll('.main__content__books__card__description__in-cart');

      

      buttons.forEach((button, index) => {
        const clickedButton = bookItems[index].id;
        button.addEventListener('click', () => {
          if (!cart[clickedButton]) {
            // Add to cart
            cart[clickedButton] = true;
            button.textContent = "in the cart";
            counter++
            console.log(counter)
          } else {
            // Remove from cart
            delete cart[clickedButton];
            button.textContent = "buy now";
            counter--
            console.log(counter)
          }
          const saveInLocal = JSON.stringify(cart);
          localStorage.setItem('myKey', saveInLocal);
        });
        // Set the initial text of the button based on the cart
        if (cart[clickedButton]) {
          button.textContent = "in the cart";
        }
      });
    }

    fetchingBooksData(clickedCategory)
        .then(book => renderBooks(book));
}

categories[0].classList.add('main__content__categories__list__item--active');
categories[0].click();


   