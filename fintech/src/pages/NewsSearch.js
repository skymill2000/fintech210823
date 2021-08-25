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

  const handleSearchButtonClick = () => {
    console.log(serachText);
    //#work2 뉴스 API 요청 전달하고 searchResult 변경하기
  };

  return (
    <div>
      <Header title="뉴스 검색"></Header>
      <SearchInput
        handleInput={handleSearchTextChange}
        handleClick={handleSearchButtonClick}
      ></SearchInput>
    </div>
  );
};

export default NewsSearch;
