import React from "react";

const BookTable = props => (  
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.books.length > 0 ? (
          props.books.map(book => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.description}</td>
              <td>{book.author}</td>
            
              <td>
                <button
                  onClick={() => {
                    props.editRow(book);
                  }}
                  className="button btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteBook(book.id)}
                  className="button btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No books</td>
          </tr>
        )}
      </tbody>
    </table>  
);

export default BookTable;
