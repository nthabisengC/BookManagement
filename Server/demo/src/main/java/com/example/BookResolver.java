package com.example.resolvers;

import com.example.models.Book;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BookResolver {

    // Dummy data for demonstration
    private List<Book> books = new ArrayList<>();

    // Constructor
    public BookResolver() {
        // Adding some dummy books for demonstration
        books.add(new Book("1", "Harry Potter", "J.K. Rowling", "Fantasy"));
        books.add(new Book("2", "The Lord of the Rings", "J.R.R. Tolkien", "Fantasy"));
        books.add(new Book("3", "To Kill a Mockingbird", "Harper Lee", "Classic"));
    }

    // Resolver method for the 'books' query
    public List<Book> books() {
        return books;
    }

    // Resolver method for the 'book' query
    public Book book(String id) {
        // Find the book by ID
        for (Book book : books) {
            if (book.getId().equals(id)) {
                return book;
            }
        }
        return null; // Book not found
    }

    // Resolver method for the 'addBook' mutation
    public Book addBook(String title, String author, String genre) {
        // Generate a unique ID (you may want to use UUID.randomUUID().toString() in a real application)
        String id = String.valueOf(books.size() + 1);
        Book newBook = new Book(id, title, author, genre);
        books.add(newBook);
        return newBook;
    }

    // Resolver method for the 'editBook' mutation
    public Book editBook(String id, String title, String author, String genre) {
        // Find the book by ID
        for (Book book : books) {
            if (book.getId().equals(id)) {
                // Update the book's properties
                if (title != null) {
                    book.setTitle(title);
                }
                if (author != null) {
                    book.setAuthor(author);
                }
                if (genre != null) {
                    book.setGenre(genre);
                }
                return book;
            }
        }
        return null; // Book not found
    }

    // Resolver method for the 'deleteBook' mutation
    public Book deleteBook(String id) {
        // Find the book by ID
        for (Book book : books) {
            if (book.getId().equals(id)) {
                books.remove(book);
                return book;
            }
        }
        return null; // Book not found
    }
}
