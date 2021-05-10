import React, { Component } from 'react';
import BOOKS from '../Data/BOOKS';

class Main extends Component {
  render() {
    return (<div>{BOOKS.map(book => <p>{book.title}</p>)}</div> );
  }
}
 
export default Main;