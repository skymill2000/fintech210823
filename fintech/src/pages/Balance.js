import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import BalanceCard from "../component/balance/BalanceCard";
import Header from "../component/Header";
import axios from "axios";
import TransactionList from "../component/balance/TransactionList";

const Balance = () => {
  const { search } = useLocation();
  const { fintechUseNo } = queryString.parse(search);
  const [balance, setBalance] = useState({});
  const [transaction, setTransaction] = useState([]);
  console.log(fintechUseNo);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  useEffect(() => {
    getBalanceData();
    getTransactionList();
  }, []);

  const getBalanceData = () => {
    const accessToken = localStorage.getItem("accessToken");
    const option = {
      method: "GET",
      url: `/v2.0/account/balance/fin_num`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        tran_dtime: "20210826132500",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setBalance(data);
    });
  };

  const getTransactionList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const option = {
      method: "GET",
      url: `/v2.0/account/transaction_list/fin_num`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20210101",
        to_date: "20210101",
        sort_order: "D",
        tran_dtime: "20210826132500",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setTransaction(data.res_list);
    });
  };

  return (
    <div>
      <Header title="잔액조회"></Header>
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={balance.fintech_use_num}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transaction}></TransactionList>
    </div>
  );
};

export default Balance;
