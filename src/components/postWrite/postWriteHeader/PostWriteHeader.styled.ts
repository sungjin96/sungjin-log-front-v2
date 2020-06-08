import styled from "styled-components";

export const PostWriteHeaderContainer = styled.div`
  height: 15rem;
`;

export const TitleInputContainer = styled.div`
  height: 8rem;
  background-color: #000;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background-color: ${(props) => props.theme.color.greyLight2};
  }
`;

export const TitleInput = styled.input`
  padding: 2rem;
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);

  font-size: 2.5rem;
`;

export const PostTagInputContainer = styled.div`
  padding: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostTagInput = styled.input`
  padding: 2rem 0 2rem 0;
  height: calc(100% - 4rem);
  flex: 1;
  font-size: 2rem;
`;
