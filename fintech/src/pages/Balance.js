import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import BalanceCard from "../component/balance/BalanceCard";
import Header from "../component/Header";

const Balance = () => {
  const { search } = useLocation();
  const { fintechUseNo } = queryString.parse(search);
  const [balance, setBalance] = useState();

  useEffect(() => {
    getBalanceData();
  }, []);

  const getBalanceData = () => {
    //#work5 잔액조회 기능 구현하기 Axios 요청 작성 바랍니다.
  };

  return (
    <div>
      <Header title="잔액조회"></Header>
      <BalanceCard></BalanceCard>
    </div>
  );
};

export default Balance;
