import styled from "styled-components";

import { ReactComponent as LikeI } from "../../assets/icons/heart.svg";
import { ReactComponent as CommentI } from "../../assets/icons/message-square.svg";

type CardPropsType = {
  imgSrc?: any;
};

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: auto;
  min-width: 30rem;
  font-family: "Nanum Myeongjo", serif;
  display: inline-block;
  margin: 7rem 2rem 0 2rem;

  border-radius: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const CardImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  margin: -3rem auto 1rem auto;
  width: 90%;
  height: 40rem;
  box-shadow: 0 1px 38px -12px rgba(0, 0, 0, 0.2),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.9);
  border-radius: 1rem;
  overflow: hidden;
`;

export const CardImage = styled.div<CardPropsType>`
  cursor: pointer;
  transition: all 0.2s;
  background-image: ${({ imgSrc }) => (imgSrc ? `url(${imgSrc})` : "")};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardContentContainer = styled.div`
  color: ${({ theme }) => theme.color.info};
  padding: 2rem 0;
  margin: 0 auto;
  width: 90%;
`;

export const CardHeader = styled.span`
  display: inline-block;
  font-size: 2.2rem;
  font-weight: 700;
  height: 4.8rem;
  line-height: 2.6rem;

  text-overflow: ellipsis;
  overflow:hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardBottom = styled.div`
  color: #d1c2a4;
  font-size: 1.4rem;
  display: flex;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const PostDate = styled.span`
  color: ${({ theme }) => theme.color.info};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeContainer = styled(IconContainer)`
  margin-right: 1rem;
`;

export const LikeIcon = styled(LikeI)`
  width: 2rem;
  height: 2rem;
`;

export const LikeCount = styled.span``;

export const CommentContainer = styled(IconContainer)``;

export const CommentIcon = styled(CommentI)`
  width: 2rem;
  height: 2rem;
`;

export const CommentCount = styled.span``;
