import React, { useState } from "react";

const AddBookForm = props => {
  const initialFormState = { id: null, name: "", description: "", author: "" };
  const [book, setBook] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!book.name || !book.description) return;

          props.addBook(book);
          setBook(initialFormState);
        }}
        className="needs-validation"        
      >
        <label htmlFor="Name">Title:</label>
        <input
          type="text"
          name="name"
          value={book.name}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Title"
          required
        />
        <label htmlFor="Description">Description:</label>
        <input
          type="text"
          name="description"
          value={book.description}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Description"
          required
        />
        <label htmlFor="Author">Author:</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Author"
          required
        />
        
        <br />
        <button className="btn btn-primary">Add new book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
