import React from "react";

import { Link } from "react-router-dom";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <h1>🚀 Welcome to home page !</h1>

        <div>
          <ul className="sub-container">
            <Link to="/articles">
              <li className="home-container">Articles Page</li>
            </Link>
            <Link to="/books">
              <li className="home-container">Books Page</li>
            </Link>
            <Link to="/people">
              <li className="home-container">Peoples Page</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
