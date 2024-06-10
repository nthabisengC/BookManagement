import React, { useState, useEffect } from "react";

const EditBookForm = (props) => {
  const [book, setBook] = useState(props.currentBook);

  useEffect(() => {
    setBook(props.currentBook);
  }, [props.currentBook]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateBook(book.id, book);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={book.name}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Name"
        required
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={book.description}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Description"
        required
      />
      <label>Author</label>
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
      <button className="button btn btn-primary" style={{ marginRight: "10px" }}>Update book details</button>
<button
  onClick={() => props.setEditing(false)}
  className="button btn btn-secondary"
>
  Cancel
</button>

    </form>
  );
};

export default EditBookForm;
