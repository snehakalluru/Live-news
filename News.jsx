import React from "react";
import Newsitems from "./Newsitems";

const News = ({ articles }) => {
  return (
    <div className="row">
      {articles.map((article, index) => (
        <div className="col-md-4" key={index}>
          <Newsitems
            title={article.title}
            description={article.description}
            url={article.urlToImage}
            linkUrl={article.url}
            author={article.author}
            date={article.publishedAt}
            source={article.source?.name}
          />
        </div>
      ))}
    </div>
  );
};

export default News;