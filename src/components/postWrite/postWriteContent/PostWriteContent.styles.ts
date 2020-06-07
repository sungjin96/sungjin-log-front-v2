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
  background-color: #999;
`;

export const MarkDownToolContainer = styled.div`
  height: 4rem;
`;

export const MarkDownTool = styled.a``;

export const MarkDownToolIcon = styled.div``;

export const MarkDownEditer = styled.textarea`
  flex: 1;
  padding: 2rem;
  font-size: 2.5rem;
  resize: none;
  outline: none;
  border: none;
`;

export const PreviewContainer = styled.div`
  flex: 1;
  background-color: #ccc;
`;
