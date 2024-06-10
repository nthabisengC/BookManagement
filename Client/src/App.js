import React, { useState, Fragment } from "react";
import BookTable from "./table/BookTable";
import AddBookForm from "./forms/AddBookForm";
import EditBookForm from "./forms/EditBookForm";

const App = () => {
  // Data
  const booksData = [
    { id: 1, name: "Bright and Tender Dark", description: "Filling a gaping hole in menopause care, everything a woman needs to know to thrive during her hormonal transition and beyond, as well as the tools to help her take charge of her health at this pivotal life stage", author: "Joanna Pearson"},
    { id: 2, name: "American Diva", description: "A shifting, increasingly loaded term, it has been used to both deride and celebrate charismatic and unapologetically fierce performers like Aretha Franklin, Divine, and the women of Labelle.", author: "Deborah Paredez" },
    { id: 3, name: "Crazy as Hell", description: "A refreshing, insightful, sacrilegious take on African American history, Crazy as Hell explores the site of Americas greatest contradictions.", author: "Hoke S. Glover" },
    { id: 4, name: "Old King", description: "In the summer of 1976, Duane Oshun finds himself stranded in a remote Montana town beset by a series of strange and menacing events.", author: "Maxim Loskutoff" }
  ];

  const initialFormState = { id: null, name: "", description: "", author: "" };

  // Setting state
  const [books, setBooks] = useState(booksData);
  const [currentBook, setCurrentBook] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  };

  const deleteBook = id => {
    setEditing(false);
    setBooks(books.filter(book => book.id !== id));
  };

  const updateBook = (id, updatedBook) => {
    setEditing(false);
    setBooks(books.map(book => (book.id === id ? updatedBook : book)));
  };

  const editRow = book => {
    setEditing(true);
    setCurrentBook({
      id: book.id,
      name: book.name,
      description: book.description,
      author: book.author
    });
  };

  return (
    <div className="container">
      <h1>Manage Books</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Book</h2>
              <EditBookForm
                editing={editing}
                setEditing={setEditing}
                currentBook={currentBook}
                updateBook={updateBook}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add book</h2>
              <AddBookForm addBook={addBook} />
            </Fragment>
          )}
        </div>
        <br />
        <div className="flex-large">
          <h2>View books</h2>
          <BookTable books={books} editRow={editRow} deleteBook={deleteBook} />
        </div>
      </div>
    </div>
  );
};

export default App;
