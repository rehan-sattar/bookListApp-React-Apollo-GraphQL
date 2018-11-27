import { gql } from 'apollo-boost';

const GetAllBooksQuery = gql`
    {
        books {
            id
            name
            genre
        }
    }
`;

const GetAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorID: ID!) {
        addBook(name: $name, genre: $genre, authorID: $authorID) {
            name
            id
        }
    }
`;

const GetSingleBook = gql`
    
    query($id: ID) {
        book(id: $id){
            name
            id
            genre
            author {
                name
                id
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;
export {
    GetAllBooksQuery,
    GetAuthorsQuery,
    addBookMutation,
    GetSingleBook
}