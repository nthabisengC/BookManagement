**Book Management Application**
This project is a full-stack application that allows users to manage a collection of books. It includes a React front-end and a Spring Boot back-end with communication handled via GraphQL.

**Table of Contents**
**Overview**
The Book Management Application enables users to view, add, edit, and delete books. The application demonstrates proficiency in building a user-friendly UI, a robust API, and integrating them using modern web technologies.

**Features**
**Front-End (React)**
Home Page: Displays a list of all books with title, author, and description.
Add Book Page: Provides a form to add a new book.
Edit Book Page: Allows users to edit the details of an existing book.
Delete Book: Enables users to delete a book from the list.
Navigation: Navigation links between the home page, add book page, and edit book page.

**Back-End (Spring Boot)**
Book Entity: Contains fields for ID, title, author, and description.
GraphQL API

**Installation**
Node.js and npm
Java JDK
Maven
Usage

**Project Structure**
**Front-End (React)**
src/forms
-AddBookForm.js
-EditBookForm.js

src/table
-BookTable.js

Back-End (Spring Boot)
src/main/java/com/example/bookmanagement
BookModel.java: Book entity.
BookRepository.java: Repository interface.
BookService.java: Service layer for business logic.

