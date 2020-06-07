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
  isSearchClick?: boolean;
  searchClicked: any;
};

const SearchComponent: React.FC<SearchPropsType> = ({
  isSearchClick,
  searchClicked,
}) => {
  return (
    <SearchContainer isSearchClick={isSearchClick}>
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
