import React from "react";
import { useParams } from "react-router-dom";

import { formatHtml } from "../../utils/markdown.utils";

import CodeBlock from "../../components/postWrite/codeBlock/CodeBlock.component";
import { PostSideWrap } from './Post.styles';

import {
  PostTextContainer,
  PostTitle,
  PostInfo,
  PostContent,
  PostSideContainer,
  PostContainer,
  PostHeaderContainer,
  PostContentContainer,
  SidePerantItem,
  SideChildItem,
} from "./Post.styles";

type Props = {};

const PostPage: React.FC<Props> = () => {
  let { key } = useParams();
  console.log(key);

  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostTextContainer>
          <PostTitle>Sungjin-log v2 개발 일지 01</PostTitle>
          <PostInfo>2020.07.23</PostInfo>
        </PostTextContainer>
      </PostHeaderContainer>
      <PostContentContainer>
        <PostContent
          source={formatHtml(`# 안녕하세요 반갑습니다 `)}
          renderers={{ code: CodeBlock }}
          escapeHtml={false}
        />
        <PostSideContainer>
          <PostSideWrap>
            <SidePerantItem>목차 1</SidePerantItem>
            <SideChildItem>목차 2</SideChildItem>
            <SideChildItem>목차 3</SideChildItem>
            <SideChildItem>목차 4</SideChildItem>
            <SidePerantItem>목차 5</SidePerantItem>
            <SideChildItem>목차 6</SideChildItem>
            <SidePerantItem>목차 5</SidePerantItem>
            <SideChildItem>목차 6</SideChildItem>
            <SidePerantItem>목차 5</SidePerantItem>
            <SideChildItem>목차 6</SideChildItem>
          </PostSideWrap>
        </PostSideContainer>
      </PostContentContainer>
    </PostContainer>
  );
};

export default PostPage;
