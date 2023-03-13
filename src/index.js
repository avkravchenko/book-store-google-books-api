import { mySlider } from "./slider";
mySlider();

const selectedBooks = [];
const categories = document.querySelectorAll('.main__content__categories__list__item');
let counter = 0;
const numberIndi = document.querySelector('.nav__divs__image__span');


console.log(numberIndi)
categories.forEach(category => {
  category.style.cursor = "pointer";
  category.addEventListener('click', handleClick);
});

function handleClick(e) {
  
  const clickedCategory = e.target.textContent;
    categories.forEach((item) => {
      item.classList.remove('main__content__categories__list__item--active');
    })
    this.classList.add('main__content__categories__list__item--active');
    
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${clickedCategory}"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
      const books = data.items;
      const pics = document.querySelectorAll('.main__content__books__card__image');
      const auth = document.querySelectorAll('.main__content__books__card__description__authors');
      const title = document.querySelectorAll('.main__content__books__card__description__title');
      const desc = document.querySelectorAll('.main__content__books__card__description__text');
      const price = document.querySelectorAll('.main__content__books__card__description__price');
      const buttonsContainer = document.querySelectorAll('.main__content__books__card__description__button-container');


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

      buttonsContainer.forEach(button => {
        button.innerHTML = '';
      })


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

        const newButton = document.createElement('button');
        newButton.setAttribute('id', book.id);
        newButton.innerHTML = 'By now';
        newButton.classList.add('main__content__books__card__description__in-cart');
        buttonsContainer[index].appendChild(newButton);
        console.log(newButton)
      })
      
      const collectionButtons = document.querySelectorAll('.main__content__books__card__description__in-cart');
      
      console.log(selectedBooks)
      collectionButtons.forEach(button => {
        button.addEventListener('click', () => {
          const isSelected = selectedBooks.includes(button);
          if (isSelected) {
            counter--;
            button.innerHTML = "By now";
            console.log(counter);
            selectedBooks.splice(selectedBooks.indexOf(button), 1);
            numberIndi.innerHTML = counter;
          } else {
            selectedBooks.push(button);
            counter++;
            button.innerHTML = "In the cart";
            button.classList.add('main__content__books__card__description__in-cart--active');
            numberIndi.innerHTML = counter;
            numberIndi.classList.add('nav__divs__image__span--active');
          }
        })
      })
    });
}

categories[0].classList.add('main__content__categories__list__item--active');
categories[0].click();


