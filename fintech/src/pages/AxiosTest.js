import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleGetData = () => {
    console.log("버튼 이벤트");
    axios.get("https://naver.com").then((response) => {
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
