export function fetchData(data){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${data}"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    .then(respone => respone.json())
    .then(books => books.items)
  }