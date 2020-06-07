import styled from "styled-components";

import { ReactComponent as CloseI } from "../../assets/icons/x.svg";
import { ReactComponent as SearchI } from "../../assets/icons/search.svg";

type SearchStylePropsType = {
  isSearchClick?: boolean;
};

export const SearchContainer = styled.div<SearchStylePropsType>`
  display: flex;
  transition: all 0.3s;
  z-index: 1;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: ${({ isSearchClick }) => (isSearchClick ? "0" : "-100vh")};
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.info};
`;

export const SearchContentContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const SearchInput = styled.input`
  transition: all 0.2s;
  width: calc(100% - 10rem);
  height: 5rem;
  padding: 2rem 2rem 2rem 8rem;
  border-radius: 100px;
  font-size: 1.8rem;

  &:active,
  &:focus{
    width: calc(100% - 5rem);
    height: 5.5rem;
  }
`;

export const SearchIcon = styled(SearchI)`
  cursor: pointer;
  transition: all 0.2s;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  color: ${(props) => props.theme.color.info};

  &:hover {
    width: 3.5rem;
    height: 3.5rem;
  }

  &:active {
    width: 3rem;
    height: 3rem;
  }
`;

export const SearchHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CloseIcon = styled(CloseI)`
  cursor: pointer;
  color: #fff;
  transition: all 0.2s;
  margin: 2rem 2rem 2rem auto;
  width: 4rem;
  height: 4rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;
