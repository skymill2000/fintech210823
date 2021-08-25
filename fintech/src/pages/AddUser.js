import React from "react";
import Header from "../component/Header";

const AddUser = () => {
  const openAuthSite = () => {
    let tmpwindow = window.open("about:blank");
    let clientId = "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF";
    //본인의 클라이언트 아이디를 입력해주세요
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };
  return (
    <div>
      <Header title={"사용자 추가"}></Header>
      <button onClick={openAuthSite}>사용자 인증</button>
    </div>
  );
};

export default AddUser;
