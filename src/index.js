import { mySlider } from "./slider";

mySlider();

let counter = 0;

const categories = document.querySelectorAll('.main__content__categories__list__item');

categories.forEach(category => {
  category.style.cursor = "pointer";
  
  category.addEventListener('click', (e) => {
    const clickedCategory = e.target.textContent;
    
    categories.forEach(item => {
      item.classList.remove('main__content__categories__list__item--active')
    })

    category.classList.add('main__content__categories__list__item--active');

    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${clickedCategory}"&AIzaSyBc5NuOilS_JP__fYBv2HGuO3fsqqR9tfo&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
      const books = data.items;
      console.log(books)
      const pics = document.querySelectorAll('.main__content__books__card__image');
      const auth = document.querySelectorAll('.main__content__books__card__description__authors');
      const title = document.querySelectorAll('.main__content__books__card__description__title');
      const desc = document.querySelectorAll('.main__content__books__card__description__text');
      const price = document.querySelectorAll('.main__content__books__card__description__price');
      const buyNow = document.querySelectorAll('.main__content__books__card__description__in-cart');
      const descriptionBlock = document.querySelectorAll('.main__content__books__card__description')

      
      
      /* buyNow.forEach(button => {
        
        
        
        
        let isButtonActive = false;

        button.addEventListener('click', () => {
          if (isButtonActive) {
            // return to previous value and decrement counter
            counter = counter - 1;
            span.innerHTML = counter;
            button.classList.remove('main__content__books__card__description__in-cart--active');
            button.innerHTML = "Buy now";
            span.classList.add('nav__buttons__image__span');
            sticker.removeChild(span);
          } else {
            // increment counter and mark button as active
            counter = counter + 1;
            span.innerHTML = counter;
            button.classList.add('main__content__books__card__description__in-cart--active');
            button.innerHTML = "IN THE CART";
            span.classList.add('nav__buttons__image__span');
            sticker.appendChild(span);
          }
          
          // toggle the active state
          isButtonActive = !isButtonActive;
        });
      }) */

      console.log(price)

      pics.forEach(pic => {
        pic.innerHTML = '';
      });

      auth.forEach(auth => {
        auth.innerHTML = '';
      });

      title.forEach(title => {
        title.innerHTML = '';
      });

      desc.forEach(desc => {
        desc.innerHTML = '';
      });

      price.forEach(price => {
        price.innerHTML = '';
      });

      books.forEach((book, index) => {
        const newImg = document.createElement("img");
        const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "/images/default-cover.jpg";
        newImg.setAttribute('src', image);
        newImg.style.minWidth = "100%";
        newImg.style.maxHeight = "230px";
        pics[index].appendChild(newImg);


        const newAuth = document.createElement("p");
        const author = !book.volumeInfo.authors ? 'Authors not found' : book.volumeInfo.authors.join(", ");
        newAuth.textContent = author;
        auth[index].appendChild(newAuth);


        const newTitle = document.createElement("h3");
        newTitle.textContent = book.volumeInfo.title;
        title[index].appendChild(newTitle);

        const newDescription = document.createElement("p");
        const description = !book.volumeInfo.description ? "Description not found" : book.volumeInfo.description.slice(0, 100) + "...";
        newDescription.textContent = description;
        desc[index].appendChild(newDescription);
        
        const newPrice = document.createElement("h3");
        const priccce = book.saleInfo.listPrice ? book.saleInfo.listPrice.amount + " " + book.saleInfo.listPrice.currencyCode:  "Price not defined";
        newPrice.textContent = priccce;
        price[index].appendChild(newPrice);

        const btton = document.createElement("button");
        console.log(btton)
        btton.classList.add('main__content__books__card__description__in-cart');
        btton.textContent = "test";
        descriptionBlock[index].appendChild(btton);
        const sticker = document.querySelector('.nav__buttons-list__image--active');
        const span = document.createElement('span');
          
        btton.addEventListener('click', () => {
          counter++;
          console.log(counter)
          span.innerHTML = counter;
          span.classList.add('nav__buttons__image__span');
          sticker.appendChild(span);
        })
      })


    })
    .catch(error => console.error(error));
  })
})

categories[0].classList.add('main__content__categories__list__item--active');
categories[0].click();

