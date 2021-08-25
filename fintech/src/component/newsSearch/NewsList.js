import React from "react";
import NewsListItem from "./NewsListItem";

const NewsList = ({ searchResult }) => {
  return (
    <div>
      {searchResult.map((news, index) => {
        return (
          <NewsListItem
            title={news.title}
            contents={news.author}
            url={news.url}
            key={index}
          ></NewsListItem>
        );
      })}
    </div>
  );
};

export default NewsList;
