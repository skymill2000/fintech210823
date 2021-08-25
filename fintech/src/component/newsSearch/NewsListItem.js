import React from "react";

const NewsListItem = ({ title, contents, url }) => {
  return (
    <div>
      <p>제목 : {title}</p>
      <p>작성자 : {contents}</p>
      <a href={url}> 기사로 이동하기 </a>
    </div>
  );
};

export default NewsListItem;
