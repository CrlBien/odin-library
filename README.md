# Simple Library

A simple library web app called My Libraria. It allows users to add, display, mark as read, adn remove books from the collection.

Try the website here: https://crlbien.github.io/odin-library/
<img width="1918" height="947" alt="image" src="https://github.com/user-attachments/assets/051bc82a-3921-4564-ad2b-175ba4aa28d2" />

## Built With
- HTML
- CSS
- Javascript

## Features
- Add new books (title, author, pages, read status)  
- Display all books in a responsive grid layout
- Toggle a book’s “read” status  
- Delete books from the collection  
- Responsive design using Flexbox & Grid

## What I Learned
- What is Object and Object Constructor in JS
- What is Prototype in JS
- What is Prototypal Inheritance
- Handle input through forms and buttons

**Note:** This project has a minor UX issue related to how it displays newly added book. The new book should appear right after the “Add” button so that it stacks properly with the existing books in the library.
The issue occurs because I used an array instead of another data structure, such as a linked list, which would allow books to stack properly while also enabling the removal of books from the middle of the collection.
However, I realized that this approach would make the project a bit more complex logic-wise, and the project only recommended using an array.
