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
  Object.values(library).forEach((book) => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    tr.append(title, author, pages, read);
    table.appendChild(tr);
  });
  divBooks.appendChild(table);
}

displayBooks(myLibrary);
