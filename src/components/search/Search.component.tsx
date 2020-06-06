import React from "react";
import {
  SearchContainer,
  CloseIcon,
  SearchHeaderContainer,
  SearchInput,
  SearchIcon,
  SearchContentContainer,
} from "./Search.styles";

type SearchPropsType = {
  isSearchActive: boolean;
  searchClicked: any;
};

const SearchComponent: React.FC<SearchPropsType> = ({
  isSearchActive,
  searchClicked,
}) => {
  return (
    <SearchContainer isSearchActive={isSearchActive}>
      <SearchHeaderContainer>
        <CloseIcon onClick={searchClicked} />
      </SearchHeaderContainer>
      <SearchContentContainer>
        <SearchInput placeholder="검색할 내용을 입력해 주세요." />
        <SearchIcon />
      </SearchContentContainer>
    </SearchContainer>
  );
};

export default SearchComponent;
