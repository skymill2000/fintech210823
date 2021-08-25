import React, { useState } from "react";
import Header from "../component/Header";
import SearchInput from "../component/newsSearch/SearchInput";

const NewsSearch = () => {
  const [serachText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState();

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div>
      <Header title="뉴스 검색"></Header>
      <SearchInput handleInput={handleSearchTextChange}></SearchInput>
    </div>
  );
};

export default NewsSearch;
