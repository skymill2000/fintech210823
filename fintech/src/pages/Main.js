import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../component/Header";
const Main = () => {
  const [accountList, setAccountList] = useState([]);
  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    //#work4 사용자 계좌 목록 요청 만들기
  };

  return (
    <div>
      <Header title={"메인"}></Header>
    </div>
  );
};

export default Main;
