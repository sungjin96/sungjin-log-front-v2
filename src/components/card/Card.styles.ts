import styled from "styled-components";

import { ReactComponent as LikeI } from "../../assets/icons/heart.svg";
import { ReactComponent as CommentI } from "../../assets/icons/message-square.svg";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: auto;
  font-family: "Nanum Myeongjo", serif;
  display: inline-block;
  margin: 10rem 2rem 0 2rem;

  border-radius: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const CardImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  margin: -5rem auto 1rem auto;
  width: 90%;
  height: 40rem;
  box-shadow: 0 1px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

export const CardContentContainer = styled.div`
  color: ${({ theme }) => theme.color.info};
  padding: 2rem 0;
  margin: 0 auto;
  width: 90%;
`;

export const CardHeader = styled.span`
  font-size: 2rem;
  font-weight: 700;
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
