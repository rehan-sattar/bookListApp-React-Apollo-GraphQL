import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { GetAuthorsQuery, addBookMutation, GetAllBooksQuery } from '../queries/queries';
class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorID: ''
        };
    };
    displayAuthors() {
        let data = this.props.GetAuthorsQuery;
        if (data.loading) {
            return <option>Loading authors..</option>
        } else {
            return data.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
            ))
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorID: this.state.authorID
            },
            refetchQueries: [{ query: GetAllBooksQuery }]
        });
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <label htmlFor="bname">Book Name: </label>
                    <input
                        type="text"
                        id="bname"
                        required
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre: </label>
                    <input
                        type="text"
                        id="genre"
                        required
                        onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="author">Author: </label>
                    <select id="author" required onChange={(e) => this.setState({ authorID: e.target.value })}>
                        <option value="">Select Author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(GetAuthorsQuery, { name: "GetAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
