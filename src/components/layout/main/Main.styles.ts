import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: ${props => props.theme.color.background};
  flex: 1;
  height: 100vh;
  overflow: auto;
`;
