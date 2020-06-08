import React from "react";
import { CardImage } from './Card.styles';

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

type CardPropsType = {
  title: string;
  date: string;
  imgSrc?: any;
  likeCount: number;
  commentCount: number;
}

const CardComponent: React.FC<CardPropsType> = ({title, date, imgSrc, likeCount, commentCount}) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={imgSrc}/>
      </CardImageContainer>
      <CardContentContainer>
        <CardHeader>{title}</CardHeader>
        <CardBottom>
          <PostDate>- {date}</PostDate>
          <IconContainer>
            <LikeContainer>
              <LikeIcon />
              <LikeCount>{likeCount}</LikeCount>
            </LikeContainer>
            <CommentContainer>
              <CommentIcon />
              <CommentCount>{commentCount}</CommentCount>
            </CommentContainer>
          </IconContainer>
        </CardBottom>
      </CardContentContainer>
    </CardContainer>
  );
};

export default CardComponent;
