import React from "react";
import Header from "../component/Header";

const AddUser = () => {
  const openAuthSite = () => {
    let tmpwindow = window.open("about:blank");
    tmpwindow.location.href = "https://naver.com";
  };
  return (
    <div>
      <Header title={"사용자 추가"}></Header>
      <button onClick={openAuthSite}>사용자 인증</button>
    </div>
  );
};

export default AddUser;
