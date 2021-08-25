import React from "react";

const SearchInput = ({ handleInput }) => {
  return (
    <div>
      <input onChange={handleInput}></input>
      <button>검색</button>
    </div>
  );
};

export default SearchInput;
