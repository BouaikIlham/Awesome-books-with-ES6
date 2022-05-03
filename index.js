import { addBook } from './modules/addBook.js';
import { showListBook } from './modules/showListBook.js';
import { deleteBook } from './modules/deleteBook.js';
import { DateTime } from './modules/luxon.js';

const displayTime = document.getElementById('date');
const datetime = DateTime.utc().toLocaleString(DateTime.DATETIME_FULL);
displayTime.textContent = datetime;

const addBtn = document.querySelector('.add-btn');
const bookList = document.querySelector('.book-list');

addBtn.addEventListener('click', addBook);
bookList.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', showListBook);

const listLinkId = document.getElementById('listId');
const addBooksLinkId = document.getElementById('addBookId');
const contactLinkId = document.getElementById('contactId');

const showBookSection = document.querySelector('.showBook-section');
const addBookSection = document.querySelector('.addBook-section');
const contactSection = document.querySelector('.contact-section');

showBookSection.style.display = 'block';
addBookSection.style.display = 'none';
contactSection.style.display = 'none';

listLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBooksLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
});