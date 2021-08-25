import React from "react";

const SearchInput = ({ handleInput, handleClick }) => {
  return (
    <div>
      <input onChange={handleInput}></input>
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchInput;
