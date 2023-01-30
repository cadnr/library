function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book('The Hobbit', 'Tolkien', 295, false);
const theOtherBook = new Book('The Other', 'Another', 1295, true);

const myLibrary = [theHobbit, theOtherBook];

function displayBooks(library) {
  const divBooks = document.querySelector('div.books');
  const table = document.createElement('table');
  Object.entries(library).forEach((book) => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');
    const readButton = document.createElement('button');
    readButton.textContent = 'Read/Not read';
    readButton.classList.add('read');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    title.textContent = book[1].title;
    author.textContent = book[1].author;
    pages.textContent = book[1].pages;
    read.textContent = book[1].read ? 'Read' : 'Not read';
    tr.setAttribute('data-index', book[0]);
    tr.append(title, author, pages, read, readButton, deleteButton);
    table.appendChild(tr);
  });

  if (!document.querySelector('.books table')) {
    divBooks.appendChild(table);
  } else {
    const oldTable = document.querySelector('.books table');
    divBooks.replaceChild(table, oldTable);
  }
  addReadListeners();
  // eslint-disable-next-line no-use-before-define
  addDeleteListeners();
}

function addDeleteListeners() {
  const deleteButton = document.querySelectorAll('button.delete');
  deleteButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      const index = e.target.parentNode.attributes['data-index'].value;
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    });
  });
}

displayBooks(myLibrary);

const inputTitle = document.querySelector('input#title');
const inputAuthor = document.querySelector('input#author');
const inputPages = document.querySelector('input#pages');
const inputRead = document.querySelector('input#read');

const form = document.querySelector('.form');
const newBookFormButton = document.querySelector('#open-new-book-form');
newBookFormButton.addEventListener('click', () => {
  form.classList.toggle('opened');
  newBookFormButton.textContent = form.classList.contains('opened')
    ? 'Close'
    : 'New book';
});

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const addNewBookButton = document.querySelector('button.add-new-book');
addNewBookButton.addEventListener('click', () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = inputRead.checked;

  addBookToLibrary(title, author, pages, read);

  displayBooks(myLibrary);
});

function addReadListeners() {
  const readButton = document.querySelectorAll('button.read');
  readButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      const index = e.target.parentNode.attributes['data-index'].value;
      myLibrary[index].read = !myLibrary[index].read;
      displayBooks(myLibrary);
    });
  });
}
