import styled from "styled-components";
import { Preview } from "../../components/preview/Preview.styles";

import img from "../../assets/images/nav_background_image.jpg";

export const PostContainer = styled.div`
  background-color: #888;
  height: 100vh;
`;

export const PostHeaderContainer = styled.div`
  background-color: #666;
  height: calc(30vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  background-image: url(${img});
  background-position: center;
  background-size: cover;

  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
`;

export const PostTextContainer = styled.div`
  color: #fff;
`;

export const PostTitle = styled.h1`
  font-size: 8rem;
`;

export const PostInfo = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
  margin-top: 1rem;
`;

export const PostContentContainer = styled.div`
  background-color: ${(props) => props.theme.color.background};
  flex: 1;
  padding: 2rem;
  z-index: 1;
  position: relative;
`;

export const PostContent = styled(Preview)`
  width: 75%;
  min-height: 100vh;
  background-color: #fff;
  display: inline-block;
  box-shadow: ${(props) => props.theme.shadow.card};
  border-radius: 2rem;
`;
export const PostSideContainer = styled.div`
  background-color: #fff;
  position: sticky;
  top: 2rem;
  right: 0;
  margin-left: 2rem;

  width: calc(25% - 10rem);
  min-height: calc(20rem - 2rem);

  padding: 0 2rem 2rem 2rem;

  display: inline-block;
  color: ${(props) => props.theme.color.greyDark4};
  box-shadow: ${(props) => props.theme.shadow.card};
  border-radius: 2rem;
`;

export const PostSideWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidePerantItem = styled.a`
  font-size: 2rem;
  margin-top: 2rem;
  transition: all 0.2s;

  &:hover {
    transform: translateX(1rem);
    color: ${(props) => props.theme.color.primary};
  }
`;

export const SideChildItem = styled.a`
  font-size: 1.8rem;
  margin-left: 2rem;
  margin-top: 0.3rem;
  transition: all 0.2s;

  &:hover {
    transform: translateX(1rem);
    color: ${(props) => props.theme.color.primary};
  }
`;
