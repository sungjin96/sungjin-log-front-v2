import React from "react";
import {
  MarkDownToolContainer,
  MarkDownTool,
  BoldIcon,
  ItalicIcon,
  StrikethrougnhIcon,
  CodeIcon,
  QuoteIcon,
  PhotoIcon,
} from "./MarkDownTool.styles";
import { toolClick } from "../../../utils/markdown.utils";
import { PostCategorySelect } from "./MarkDownTool.styles";

type Props = {
  editerRef: any;
};

const MarkDownToolComponent: React.FC<Props> = ({ editerRef }) => {
  return (
    <MarkDownToolContainer>
      <MarkDownTool onClick={toolClick("#", editerRef)}>H1</MarkDownTool>
      <MarkDownTool onClick={toolClick("##", editerRef)}>H2</MarkDownTool>
      <MarkDownTool onClick={toolClick("###", editerRef)}>H3</MarkDownTool>
      <MarkDownTool onClick={toolClick("####", editerRef)}>H4</MarkDownTool>
      <MarkDownTool onClick={toolClick("**", editerRef)}>
        <BoldIcon />
      </MarkDownTool>
      <MarkDownTool onClick={toolClick("_", editerRef)}>
        <ItalicIcon />
      </MarkDownTool>
      <MarkDownTool onClick={toolClick("~~", editerRef)}>
        <StrikethrougnhIcon />
      </MarkDownTool>
      <MarkDownTool onClick={toolClick("```", editerRef)}>
        <CodeIcon />
      </MarkDownTool>
      <MarkDownTool onClick={toolClick("`", editerRef)}>
        <QuoteIcon />
      </MarkDownTool>
      <MarkDownTool>
        <PhotoIcon />
      </MarkDownTool>

      <PostCategorySelect>
        <option>카테고리를 선택해 주세요.</option>
        <option>React</option>
        <option>Javascript</option>
        <option>일상</option>
        <option>잡탕</option>
      </PostCategorySelect>
    </MarkDownToolContainer>
  );
};

export default MarkDownToolComponent;
