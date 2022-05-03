import {showListBook} from "./showListBook.js";


const deleteBook = (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const id = e.target.attributes.id.value;
    const filteredBooks = listBooks.filter((book) => book.id !== +id);
    listbooks = JSON.parse(localStorage.getItem('books'));
    localStorage.setItem(
      'books',
      JSON.stringify(filteredBooks),
    );
    showListBook();
  }
}

export {deleteBook};