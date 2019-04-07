import React from "react";

function SearchForm() {
    return (
        <form>
            <h1>Book Search</h1>
            <div className="form-group">
                <label for="book">Book</label>
                <input type="text" className="form-control" id="book" aria-describedby="Enter title" placeholder="Enter title" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default SearchForm;
