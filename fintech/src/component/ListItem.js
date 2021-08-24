import React from "react";

const ListItem = ({ username, age, height }) => {
  return (
    <p>
      {username} 님 나이는 {age} 이고 키는 {height}cm 입니다.
    </p>
  );
};

export default ListItem;
