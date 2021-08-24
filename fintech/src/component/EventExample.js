import React from "react";

const EventExample = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default EventExample;
