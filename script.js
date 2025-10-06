let myLibrary = [];

const modal = document.getElementById("book-modal");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("book-form");
const mainContainer = document.querySelector(".main-container");
const template = document.querySelector(".book.card.template");

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
  }
}

addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Default books
myLibrary.push(
  new Book("The Pragmatic Programmer", "Andrew Hunt", 352, true),
  new Book("Atomic Habits", "James Clear", 320, false)
);

displayBooks();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const pages = form.pages.value.trim();
  const read = form.read.checked;

  if (!title || !author || !pages) return;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  displayBooks();

  modal.style.display = "none";
  form.reset();
});

function displayBooks() {
  const oldBooks = mainContainer.querySelectorAll(
    ".book.card:not(.template):not(.add)"
  );
  oldBooks.forEach((b) => b.remove());

  myLibrary.forEach((book) => {
    const clone = template.cloneNode(true);
    clone.classList.remove("template");
    clone.style.display = "flex";

    clone.querySelector("#book-name").textContent = book.title;
    clone.querySelector("#author-name").textContent = book.author;
    clone.querySelector("#page").textContent = book.pages;

    const readCheckbox = clone.querySelector("#is-read");
    readCheckbox.checked = book.isRead;

    readCheckbox.addEventListener("change", () => {
      book.isRead = readCheckbox.checked;
    });

    const removeBtn = clone.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      myLibrary = myLibrary.filter((b) => b.id !== book.id);
      displayBooks();
    });

    const addCard = mainContainer.querySelector(".add");
    mainContainer.insertBefore(clone, addCard);
  });
}
