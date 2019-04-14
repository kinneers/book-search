import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = process.env.SPOTIFY_ID;

// Exports object with "search" method to query Google Books API for selected title
export default {
    //Searches Google Books API for books with query words in title
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },
    //Saves book to database
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData);
    },
    // Gets all books from the database
    getSaved: function(id) {
        return axios.get('/api/books/');
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id);
    },
};
