import styled from "styled-components";

export const PostWriteContentContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
`;

export const MarkDownContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const MarkDownToolContainer = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  background: #ccc;
`;

export const MarkDownTool = styled.button`
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
  width: 4rem;
  height: 4rem;

  border: none;
  margin-left: 0.5rem;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const MarkDownToolIcon = styled.div``;

export const MarkDownEditer = styled.textarea`
  flex: 1;
  padding: 2rem;
  font-size: 2.5rem;
  color: #343a40;
  resize: none;
  outline: none;
  border: none;
`;

export const PreviewContainer = styled.div`
  flex: 1;
  overflow: auto;

  @media only screen and (max-width: 70.35em) {
    display: none;
  }
`;

export const PostTitle = styled.h1`
  padding: 0 2rem;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 1.6rem;
  margin-block-end: 1.6rem;
  margin-block-start: 2.7rem;
  margin-inline-end: 0;
  margin-inline-start: 0;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
