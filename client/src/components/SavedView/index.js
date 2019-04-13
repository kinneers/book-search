import React, { Component } from 'react';
import ResultsContainer from './../ResultsContainer';
//import API from './../utils/API';

class Saved extends Component {
    //Set the component's initial state
    // state = {
        
    // }

    //When the component mounts, show the Search from and Empty Results

    //Load the API Results and set them to this.state.books

    //Save a book to the database with a given id

    //Use handleInputChange to handle updating component state when the user types into the input field

    //When the form is submitted, make API call to Google Books API

    render() {
        return(
            <div>
                <div className='container'>
                    <ResultsContainer />
                </div>
            </div>
        )
    }
}

export default Saved;

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => {
//                   return (
//                     <ListItem key={book._id}>
//                       <a href={"/books/" + book._id}>
//                         <strong>
//                           {book.title} by {book.author}
//                         </strong>
//                       </a>
//                       <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Books;
