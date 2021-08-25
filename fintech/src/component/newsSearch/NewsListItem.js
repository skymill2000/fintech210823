import React from "react";
import styled from "styled-components";

const NewsListBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 10px;
`;

const NewsListItem = ({ title, contents, url }) => {
  return (
    <NewsListBlock>
      <p>제목 : {title}</p>
      <p>작성자 : {contents}</p>
      <a href={url}> 기사로 이동하기 </a>
    </NewsListBlock>
  );
};

export default NewsListItem;
