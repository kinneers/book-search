import React, { Component } from 'react';
import API from './../../utils/API';

//DON'T FORGET TO GO BACK AND ESCAPE ANY HTML ENTERED- CHECK IF FORM CONTROL DOES THIS

class SearchForm extends Component {
    //Sets initial state
    state = {
        title: '',
        result: [],
        message: 'Your search results will display here.'
    };

    //Set the title's value to the input text upon user input
    onChangeTitle = event => {
        this.setState({ title: event.target.value });
    };

    //Captures the input value from the new state, then uses it to query the Google Books API
    onSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.title);
    }

    //Function to query the Google Books API
    searchBooks = query => {
        API.search(query)
        .then(res => {
            if (res.data.totalItems > 0) {
                let resultArray = res.data.items;
                this.setState({ result: resultArray, title: '', message: 'Your search results will display here.' });
            } else {
                //If no results were returned...
                this.setState({ result: [], title: '', message: 'That title did not return any results. Please try again.'})
            }
        })
        .catch(err => console.log(err));
    }

    //Saves selected book to MongoDB
    saveBook(event) {
        const bookInfo = event.target;
        API.saveBook({
            title: bookInfo.dataset.title,
            authors: bookInfo.dataset.authors,
            description: bookInfo.dataset.description,
            image: bookInfo.dataset.image,
            link: bookInfo.dataset.link
        })
        .then(res => console.log('Saved!'))
        //SEND OUT A MODAL WHEN YOU GET A CHANCE
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="card">
                        <div className="card-body">
                            <h2>Book Search</h2>
                            <hr/>
                        </div>
                        <form className='p-4' onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="book">Enter a Title to Search the Google Books API:</label>
                                <input value={this.state.title} onChange={this.onChangeTitle} type="text" className="form-control" id="book" aria-describedby="Enter title" placeholder="Enter title" />
                            </div>
                            <button disabled={!this.state.title} type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
                <br/>
                <div className='container'>
                    <div className="card">
                        <div className="card-body">
                            <h2>Results</h2>
                            <hr/>
                            {(this.state.result.length) ? (
                                <ul className='list-group'>
                                {this.state.result.map(result => (
                                    <li className='list-group-item' key={result.id}>
                                        <div className='clearfix'>
                                            <button className='btn btn-primary float-right p-2' data-title={result.volumeInfo.title} data-link={result.volumeInfo.previewLink} data-authors={result.volumeInfo.authors} data-image={result.volumeInfo.imageLinks.smallThumbnail} data-description={result.volumeInfo.description} onClick={this.saveBook}>Save</button>
                                            <a className="btn btn-success float-right p-2" href={result.volumeInfo.previewLink} target='_blank' rel='noopener noreferrer'>View</a>
                                        </div>
                                        <h2>{result.volumeInfo.title}</h2>
                                        <h4>Author(s): {result.volumeInfo.authors}</h4>
                                        <div className='image-description d-flex'>
                                            <div className='thumbnail-container'>
                                                <img className='thumbnail' src={result.volumeInfo.imageLinks.smallThumbnail} alt='Book'/>
                                            </div>
                                            <p className='p-3'>{result.volumeInfo.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            ) : <h3>{this.state.message}</h3>}
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    };
}

export default SearchForm;
