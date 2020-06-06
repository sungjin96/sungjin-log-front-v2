import styled from "styled-components";

export const NavNotActiveContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  margin-top: 2rem;
  height: calc(100vh - 8rem - 8rem);
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow.card};
`;
