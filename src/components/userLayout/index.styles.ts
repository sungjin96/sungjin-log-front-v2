import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
