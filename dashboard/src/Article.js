import React from "react";
import { Link, useParams } from "react-router-dom";

function Article() {
  // Access the slug route parameter using useParams hook
  const { slug } = useParams();

  return (
    <>
      <div className="article">
        <Link to="/articles">
          <h3>
            <span>👈</span>
            Go back to articles page
          </h3>
        </Link>
        <h2>
          The slug of the article is :<strong>{slug}</strong>
        </h2>
      </div>
    </>
  );
}

export default Article;
