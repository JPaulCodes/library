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
