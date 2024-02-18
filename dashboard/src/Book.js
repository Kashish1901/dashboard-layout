import React from "react";
import books from "./data/books.json";
import { Link } from "react-router-dom";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value.toLowerCase(), // Convert search text to lowercase
    });
  };

  render() {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchText)
    );

    return (
      <div className="articles">
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchText}
          className="article-input"
          onChange={this.handleChange}
        />
        <div className="book-card ">
          <ul className="flex wrap">
            {filteredBooks.map((book) => (
              <li key={book.isbn} className="sub-card">
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>

                <p>Author: {book.author}</p>
                <a href={book.website}>
                  <button className="btn">Buy Now</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Book;
