import styled, { css } from "styled-components";

import { ReactComponent as CodeI } from "../../../assets/icons/code-24px.svg";
import { ReactComponent as BoldI } from "../../../assets/icons/format_bold-24px.svg";
import { ReactComponent as ItalicI } from "../../../assets/icons/format_italic-24px.svg";
import { ReactComponent as StrikethrougnhI } from "../../../assets/icons/format_strikethrough-24px.svg";
import { ReactComponent as PhotoI } from "../../../assets/icons/insert_photo-24px.svg";

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
`;

export const MarkDownTool = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  transition: all 0.2s;
  width: 4rem;
  height: 4rem;

  border: none;
  margin-left: 0.5rem;
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.color.backgroundDark};
  }

  &:active {
    transform: scale(0.9);
    background-color: ${(props) => props.theme.color.background};
  }
`;

const IconCss = css``;

export const CodeIcon = styled(CodeI)`
  ${IconCss}
`;
export const BoldIcon = styled(BoldI)`
  ${IconCss}
`;
export const ItalicIcon = styled(ItalicI)`
  ${IconCss}
`;
export const StrikethrougnhIcon = styled(StrikethrougnhI)`
  ${IconCss}
`;
export const PhotoIcon = styled(PhotoI)`
  ${IconCss}
`;

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
  background-color: ${(props) => props.theme.color.background};

  @media only screen and (max-width: 900px) {
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
