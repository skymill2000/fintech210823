import React from "react";
import Header from "../component/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
const QRCode = require("qrcode.react");
const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const QrCode = () => {
  const { search } = useLocation();
  const { fintechUseNo } = queryString.parse(search);

  return (
    <div>
      <Header title={"QR코드생성"}></Header>
      <QRBlock>
        <QRCode value={fintechUseNo} size={256}></QRCode>
        <p>{fintechUseNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCode;
