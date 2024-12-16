function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.sayTitle = function () {
    console.log(this.title);
  };
  this.sayAuthor = function () {
    console.log(this.author);
  };
  this.sayPages = function () {
    console.log(this.pages);
  };
  this.sayReadStatus = function () {
    console.log(this.readStatus);
  };
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  };
}

const theSlightEdge = new Book("The Slight Edge", "Olsom", "212", "read");
const thePelicanBrief = new Book(
  "The Pelican Brief",
  "IDK",
  "IDK",
  "not read yet"
);

console.log(theSlightEdge.info());
console.log(Book.prototype);
