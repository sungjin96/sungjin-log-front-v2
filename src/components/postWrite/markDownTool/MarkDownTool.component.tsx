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
    </MarkDownToolContainer>
  );
};

export default MarkDownToolComponent;
