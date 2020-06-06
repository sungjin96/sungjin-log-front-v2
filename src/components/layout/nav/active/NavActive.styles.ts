import styled from "styled-components";

export const NavActiveContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  margin-top: 2rem;
  height: calc(100vh - 8rem - 8rem);
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadow.card};
  display: flex;
`;

export const NavMenuContainer = styled.div`
  padding: 2rem;
  flex: 1;
  color: ${({ theme }) => theme.color.info};
  overflow: auto;
  position: relative;

  &:after{
    content: "";
    position: absolute;
    right: 0;
    top: 3%;
    width: 1px;
    height: 94%;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const MenuHeaderContainer = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 5rem;
`;

export const MenuContentContainer = styled.div``;

export const MenuContainer = styled.div`
  margin: 0 2rem 3rem 2rem;
`;

export const MenuTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;

export const MenuList = styled.ul`
  color: ${({ theme }) => theme.color.infoLight};
`;

export const MenuItem = styled.li`
  transition: all 0.2s;
  cursor: pointer;
  margin: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.color.infoDark};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.color.infoLight};
    transform: scale(1);
  }

  &:before {
    content: "-";
    margin-right: 1rem;
  }
`;

export const NavInfoContainer = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BastTagContainer = styled.div`
  flex: 1;
  background: orange;
`;

export const BastPostContainer = styled.div`
  flex: 1;
  background: yellowgreen;
`;
