import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleGetData = () => {
    console.log("버튼 이벤트");
    axios
      .get(
        "https://newsapi.org/v2/everything?q=kpop&from=2021-07-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko"
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <button onClick={handleGetData}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosTest;
