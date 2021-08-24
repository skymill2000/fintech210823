import React, { useState } from "react";

const EventExample = () => {
  //   let contents = "내용입니다.";
  const [contents, setContents] = useState("기본값");

  const handleChange = (e) => {
    const { value } = e.target;
    setContents(value);
  };

  const handleClick = () => {
    alert(contents);
  };

  return (
    <div>
      <p>{contents}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventExample;
