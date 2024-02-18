import React from "react";
import articles from "./data/article.json";
import { Link } from "react-router-dom";
class Articles extends React.Component {
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
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchText)
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
        <ul>
          {filteredArticles.map((article) => (
            <li key={article.id}>
              <Link to={"/articles/" + article.slug}>
                <h2>{article.title}</h2>
              </Link>

              <p>{article.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
