import React, { useState } from "react";

const EventExample = () => {
  //   let contents = "내용입니다.";
  const [contents, setContents] = useState("기본값");

  const handleChange = (e) => {
    const { value } = e.target;
    setContents(value);
  };

  return (
    <div>
      <p>{contents}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default EventExample;
