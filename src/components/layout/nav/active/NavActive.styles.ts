import styled from "styled-components";

import { ReactComponent as MoreI } from "../../../../assets/icons/more-horizontal.svg";

export const NavActiveContainer = styled.div`
  margin-top: 2rem;
  height: calc(100vh - 8rem - 8rem);
  display: flex;

  @media only screen and (max-width: 46.9em) {
    flex-direction: column;
  }
`;

export const NavMenuContainer = styled.div`
  padding: 2rem;
  flex: 1;
  color: ${({ theme }) => theme.color.info};
  overflow: auto;
  position: relative;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${(props) => props.theme.shadow.card};

  @media only screen and (max-width: 46.9em) {
    margin-bottom: 2rem;
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
  padding: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.info};

  @media only screen and (max-width: 46.9em) {
    padding: 0;
  }
`;

export const BastTagContainer = styled.div`
  height: calc(50% - 5rem);
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${(props) => props.theme.shadow.card};
  overflow: auto;
`;

export const InfoHeaderConteinr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TagTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const MoreIcon = styled(MoreI)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;

  &:hover {
    color: ${({ theme }) => theme.color.infoDark};
  }

  &:active {
    color: ${({ theme }) => theme.color.infoLight};
  }
`;

export const TagContentContainer = styled.div`
`;

export const TagItem = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0.6rem 1.1rem;
  margin: 0.5rem;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
  }
`;

export const BastPostContainer = styled.div`
  height: calc(50% - 5rem);
  padding: 2rem;
  background: yellowgreen;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${(props) => props.theme.shadow.card};
  overflow: auto;
`;

export const PostList = styled.div`
`;

export const PostItem = styled.span`
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
  }
`;
