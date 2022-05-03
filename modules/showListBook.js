const bookList = document.querySelector('.book-list');

const showListBook = () => {
  bookList.innerHTML = '';
  let listBooks = [];
  listBooks = JSON.parse(localStorage.getItem('books'));
  listBooks.forEach((element) => {
    const listTag = `
            <div class="add-books">
              <p>"${element.title}" by ${element.author}</p>
              <button type="button" class="remove-btn" id="${element.id}">Remove</button>
            </div>
        `;
    bookList.innerHTML += listTag;
  });
  return bookList;
};

export { showListBook };