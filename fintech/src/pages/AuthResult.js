import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
//쿼리스트링을 가져오기 위한 React Hook

const AuthResult = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const [accessToken, setAccessToken] = useState("토큰 받아오기 전");

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = () => {
    console.log("토큰을 가져옵니다");
  };

  return (
    <div>
      <Header title="인증 결과"></Header>
      <p>인증 코드 : {code}</p>
      <p>AccessToken : {accessToken}</p>
    </div>
  );
};

export default AuthResult;
