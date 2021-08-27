import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = ({ tofintechno }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [acountList, setAccountList] = useState([]);
  useEffect(() => {
    getAccountList();
  }, []);
  const getAccountList = () => {};

  return (
    <ModalWithdrawBlock>
      <Slider {...settings}></Slider>
    </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;
