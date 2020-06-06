import React from "react";

import {
  CardContainer,
  CardImageContainer,
  CardContentContainer,
  CardHeader,
  CardBottom,
  PostDate,
  LikeContainer,
  LikeIcon,
  LikeCount,
  CommentIcon,
  CommentCount,
  CommentContainer,
  IconContainer,
} from "./Card.styles";

const CardComponent: React.FC = () => {
  return (
    <CardContainer>
      <CardImageContainer></CardImageContainer>
      <CardContentContainer>
        <CardHeader>v2-blog 개발 일지 01v2-blog 개발 일지 01v2-blog 개발 일지 01v2-blog 개발 일지 01</CardHeader>
        <CardBottom>
          <PostDate>- 2020.06.09</PostDate>
          <IconContainer>
            <LikeContainer>
              <LikeIcon />
              <LikeCount>4</LikeCount>
            </LikeContainer>
            <CommentContainer>
              <CommentIcon />
              <CommentCount>6</CommentCount>
            </CommentContainer>
          </IconContainer>
        </CardBottom>
      </CardContentContainer>
    </CardContainer>
  );
};

export default CardComponent;
