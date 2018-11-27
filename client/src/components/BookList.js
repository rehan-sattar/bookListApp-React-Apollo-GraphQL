import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { GetAllBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemID: null
        };
    };

    displayData() {
        let data = this.props.data;
        if (data.loading) {
            return <h3>Loading Books...</h3>
        } else {
            return data.books.map(book => (
                <li key={book.id} onClick={(e) => this.setState({ selectedItemID: book.id })}>{book.name}</li>
            ))
        }
    }
    render() {
        return (
            <div id="main">

                <ul id="book-list">
                    {
                        this.displayData()
                    }
                </ul>
                <BookDetails bookId={this.state.selectedItemID} />
            </div>
        );
    }
}

export default graphql(GetAllBooksQuery)(BookList);
