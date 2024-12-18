// function Book(title, author, pages, readStatus) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
//   this.sayTitle = function () {
//     console.log(this.title);
//   };
//   this.sayAuthor = function () {
//     console.log(this.author);
//   };
//   this.sayPages = function () {
//     console.log(this.pages);
//   };
//   this.sayReadStatus = function () {
//     console.log(this.readStatus);
//   };
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
//   };
// }

// const theSlightEdge = new Book("The Slight Edge", "Olsom", "212", "read");
// const thePelicanBrief = new Book(
//   "The Pelican Brief",
//   "IDK",
//   "IDK",
//   "not read yet"
// );

// console.log(theSlightEdge.info());
// console.log(Book.prototype);

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  renderBooks();
}

function renderBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = ""; // Clear previous display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index);

    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        <button class="toggle-read-btn">Toggle Read Status</button>
        <button class="remove-btn">Remove</button>
      `;

    // Add event listeners to buttons
    bookCard.querySelector(".toggle-read-btn").addEventListener("click", () => {
      myLibrary[index].toggleReadStatus();
      renderBooks();
    });

    bookCard.querySelector(".remove-btn").addEventListener("click", () => {
      myLibrary.splice(index, 1);
      renderBooks();
    });

    bookContainer.appendChild(bookCard);
  });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  const dialog = document.getElementById("book-form-dialog");
  dialog.showModal();
});

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById("book-form").reset();
  document.getElementById("book-form-dialog").close();
});
