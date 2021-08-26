import React from "react";
import BalanceCard from "../component/balance/BalanceCard";
import Header from "../component/Header";

const Balance = () => {
  return (
    <div>
      <Header title="잔액조회"></Header>
      <BalanceCard></BalanceCard>
    </div>
  );
};

export default Balance;
