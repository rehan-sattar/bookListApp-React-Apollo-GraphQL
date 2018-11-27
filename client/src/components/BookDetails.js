import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { GetSingleBook } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p> {book.author.name} </p>

          <p>All books by this author: </p>
          <ul className="other-books">
            {
              book.author.books.map(book => <li key={book.id}>{book.name}</li>)
            }
          </ul>
        </div>
      )
    } else {
      return <p>No book selected...</p>
    }
  }
  render() {
    return (
      <div id="book-details">
        <p>Get Details here: </p>
        {
          this.displayBookDetails()
        }
      </div>
    )
  }
};

export default graphql(GetSingleBook, {
  options: (props) => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails)
