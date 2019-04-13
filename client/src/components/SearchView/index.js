import React, { Component } from 'react';
import SearchForm from './../SearchForm';
import ResultsContainer from './../ResultsContainer';
//import API from './../utils/API';

class Search extends Component {
    //Set the component's initial state
    state = {
        
    }

    //When the component mounts, show the Search from and Empty Results

    //Load the API Results and set them to this.state.books

    //Save a book to the database with a given id

    //Use handleInputChange to handle updating component state when the user types into the input field

    //When the form is submitted, make API call to Google Books API

    render() {
        return(
            <div>
                <div className='container'>
                    <SearchForm />
                </div>
                <br/>
                <div className='container'>
                    <ResultsContainer />
                </div>
            </div>
        )
    }
}

export default Search;
