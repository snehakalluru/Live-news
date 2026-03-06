import React from "react";
import PropTypes from "prop-types";

// Helper function to truncate text
const truncate = (text, length) =>
  text?.length > length ? text.slice(0, length) + "..." : text;

const Newsitems = ({ title, description, url, linkUrl, author, date, source }) => {
  return (
    <div className="card my-3 shadow-sm">
      {url && <img src={url} className="card-img-top" alt={title || "news"} />}
      <div className="card-body">
        <h5 className="card-title">{truncate(title, 60)}</h5>
        <p className="card-text">{truncate(description, 100)}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author} on{" "}
            {date
              ? new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Unknown Date"}
          </small>
        </p>
        <span className="badge bg-info mb-2">{source}</span>
        <br />
        <a
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-danger"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

// Prop validation
Newsitems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
};

// Default props
Newsitems.defaultProps = {
  title: "No Title Available",
  description: "No Description Available",
  author: "Unknown",
  date: "Unknown Date",
  source: "Unknown Source",
};

export default Newsitems;