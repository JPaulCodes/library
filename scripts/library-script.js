const bookForm = document.querySelector('.book-form');
const bookContainer = document.querySelector('.book-container');

const myLibrary = [];

function CreateBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  let hasRead = false;
  if (read) hasRead = true;
  const book = new CreateBook(title, author, pages, hasRead);
  myLibrary.push(book);
}

function generateBookCard(book) {
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const bookRead = document.createElement('button');

  bookCard.classList.add('book-card');
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  bookPages.innerText = book.pages;

  if (book.read) {
    bookRead.classList.add('finished');
    bookRead.innerText = 'Finished';
  } else {
    bookRead.classList.add('not-finished');
    bookRead.innerText = 'Not Finished';
  }

  bookCard.append(bookTitle, bookAuthor, bookPages, bookRead);
  return bookCard;
}

function updateBookContainer() {
  bookContainer.replaceChildren();
  myLibrary.forEach((book) => {
    const bookCard = generateBookCard(book);
    bookContainer.appendChild(bookCard);
  });
}

bookForm.addEventListener('submit', (ev) => {
  const fd = new FormData(bookForm);

  ev.preventDefault();
  addBook(...fd.values());
  updateBookContainer();
  bookForm.reset();
});
