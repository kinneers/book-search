import React, { Component } from 'react';
import API from './../../utils/API';

class Saved extends Component {
    //Set the component's initial state
    state = {
        result: [],
        message: ''
    }

    //When the component mounts, get all of the currently saved books to render to page
    componentDidMount() {
        API.getSaved()
        .then(res => {
            if (!res.data.length) {
                //If no results were returned...
                this.setState({ result: [], message: 'There are currently no saved titles.'})
            } else {
                let resultArray = res.data;
                this.setState({ result: resultArray, message: '' });
            }
        })
        .catch(err => console.log(err));
    }

    //Deletes selected book from MongoDB
    deleteBook(event) {
        API.deleteBook(event.target.dataset.id)
        .then(res => this.componentDidUpdate)
        //SEND OUT A MODAL WHEN YOU GET A CHANCE
        .catch(err => console.log(err));
        //State needs to change here
    };

    componentDidUpdate() {
        API.getSaved()
        .then(res => {
            if (!res.data.length) {
                //If no results were returned...
                this.setState({ result: [], message: 'There are currently no saved titles.'})
            } else {
                let resultArray = res.data;
                this.setState({ result: resultArray, message: '' });
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
            <div className='container'>
                <div className="card">
                    <div className="card-body">
                        <h2>Results</h2>
                        <hr/>
                        {(this.state.result.length) ? (
                            <ul className='list-group'>
                            {this.state.result.map(result => (
                                <li className='list-group-item' key={result._id}>
                                    <div className='clearfix'>
                                        <button className='btn btn-danger float-right p-2' data-id={result._id} onClick={this.deleteBook}>Delete</button>
                                        <a className="btn btn-success float-right p-2" href={result.link} target='_blank' rel='noopener noreferrer'>View</a>
                                    </div>
                                    <h2>{result.title}</h2>
                                    <h4>Author(s): {result.authors}</h4>
                                    <div className='image-description d-flex'>
                                        <div className='thumbnail-container'>
                                            <img className='thumbnail' src={result.image} alt='Book'/>
                                        </div>
                                        <p className='p-3'>{result.description}</p>
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
