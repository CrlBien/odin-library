const modal = document.getElementById("book-modal");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");

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

const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;

  console.log({ title, author, pages, read });
  // TODO: Add this book to your main-container

  // Close modal after submission
  modal.style.display = "none";
  form.reset();
});
