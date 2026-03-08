import React, { Component } from "react";
import Newsitems from "./Newsitems";
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("i am a constructor");
    this.state = {
      articles: [],   // always start as an empty array
      loading: true,  // track loading state
      error: null,    // track errors
    };
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=e236f7be71a245f2b0f79ae494c888ff`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles) {
        this.setState({ articles: parsedData.articles, loading: false });
      } else {
        this.setState({ articles: [], loading: false, error: "No articles found" });
      }
    } catch (err) {
      this.setState({ articles: [], loading: false, error: "Failed to fetch news" });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <>
        <h1><center className="text-center text-danger">Live News</center></h1>
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="text-center my-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <h4 className="text-center text-muted">{error}</h4>
            ) : articles && articles.length > 0 ? (
              articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title}
                    description={element.description}
                    url={element.urlToImage}
                    linkUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))
            ) : (
              <h4 className="text-center text-muted">No articles found</h4>
            )}
          </div>
        </div>
      </>
    );
  }
}
