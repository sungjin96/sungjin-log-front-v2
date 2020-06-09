import styled from "styled-components";

type PostConfigPropsType = {
  configClicked?: boolean;
};

export const PostConfigContainer = styled.div<PostConfigPropsType>`
  position: fixed;
  display: ${({ configClicked }) => (configClicked ? "flex" : "none")};
  transition: all 0.4s;
  flex-direction: column;
`;

export const BlockScreen = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ConfigContentContainer = styled.div<PostConfigPropsType>`
  transition: all 0.4s;
  width: 100vw;
  height: 60vh;
  position: fixed;
  bottom: ${({ configClicked }) => (configClicked ? "0" : "-50vh")};
  left: 0;
  background-color: ${(props) => props.theme.color.background};
`;
