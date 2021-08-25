import React from "react";

const NewsList = ({ searchResult }) => {
  return (
    <div>
      {searchResult.map((news) => {
        return <p>{news.author}</p>;
      })}
    </div>
  );
};

export default NewsList;
