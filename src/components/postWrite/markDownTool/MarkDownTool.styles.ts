import styled, { css } from 'styled-components';

import { ReactComponent as CodeI } from "../../../assets/icons/code-24px.svg";
import { ReactComponent as BoldI } from "../../../assets/icons/format_bold-24px.svg";
import { ReactComponent as ItalicI } from "../../../assets/icons/format_italic-24px.svg";
import { ReactComponent as StrikethrougnhI } from "../../../assets/icons/format_strikethrough-24px.svg";
import { ReactComponent as PhotoI } from "../../../assets/icons/insert_photo-24px.svg";
import { ReactComponent as QuoteI } from "../../../assets/icons/format_quote-24px.svg";

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
export const QuoteIcon = styled(QuoteI)`
 ${IconCss}
`