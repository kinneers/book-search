import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = process.env.SPOTIFY_ID;

// Exports object with "search" method to query Google Books API for selected title
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
