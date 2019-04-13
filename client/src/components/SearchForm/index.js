import React, { Component } from "react";
import API from "./../../utils/API";

//import { StringDecoder } from "string_decoder";

//DON'T FORGET TO GO BACK AND ESCAPE ANY HTML ENTERED- CHECK IF FORM CONTROL DOES THIS

class SearchForm extends Component {
    constructor(props) {
        super(props);
    
        //Sets initial state of this component
        this.state = {
            title: '',
            result: []
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //Set the title's value to input text upon user input
    onChangeTitle(event) {
        this.setState({ title: event.target.value });
    };

    //Captures the input value from the new state, then uses it to query the Google Books API
    onSubmit(event) {
        event.preventDefault();
        console.log('Form Submitted');
        console.log(`This title: ${this.state.title}`);

        //Set query to the current state of title
        const query = this.state.title;

        //Send the new title to Google Books API and retrieve results
        API.search(query).then(res => console.log(res.data.items))
            // .then(res => this.setState({ result: res.data.items }))
            .catch(err => console.log(err));

        // Reset the form input field
        this.setState = {
            title: ''
        };   
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2>Book Search</h2>
                    <hr/>
                </div>
                <form className='p-4' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="book">Book</label>
                        <input value={this.state.title} onChange={this.onChangeTitle} type="text" className="form-control" id="book" aria-describedby="Enter title" placeholder="Enter title" />
                    </div>
                    <button disabled={!this.state.title} type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        );
    };
}

export default SearchForm;
