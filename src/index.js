import { mySlider } from "./slider";

mySlider();

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

      books.forEach((book, index) => {
        const newImg = document.createElement("img");
        newImg.setAttribute('src', book.volumeInfo.imageLinks.thumbnail);
        newImg.style.minWidth = "100%";
        newImg.style.maxHeight = "230px";
        pics[index].appendChild(newImg);


        const newAuth = document.createElement("p");
        newAuth.textContent = book.volumeInfo.authors.join(", ");
        auth[index].appendChild(newAuth);


        const newTitle = document.createElement("h3");
        newTitle.textContent = book.volumeInfo.title;
        title[index].appendChild(newTitle);

        const newDescription = document.createElement("p");
        newDescription.textContent = book.volumeInfo.description.slice(0, 100) + "...";
        


        desc[index].appendChild(newDescription);
        
      })


    })
    .catch(error => console.error(error));
  })
})

categories[0].classList.add('main__content__categories__list__item--active');
categories[0].click();