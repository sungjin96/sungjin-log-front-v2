import React, { useRef, useState } from "react";

import { useKeyDown, toolClick } from "../../../utils/markdown.utils";

import PreviewComponent from "../../preview/Preview.component";
import PostWriteHeaderComponent from "../postWriteHeader/PostWriteHeader.component";

import {
  PostWriteContentContainer,
  MarkDownContainer,
  MarkDownToolContainer,
  MarkDownEditer,
  PreviewContainer,
  PostTitle,
  MarkDownTool,
  BoldIcon,
  ItalicIcon,
  StrikethrougnhIcon,
  CodeIcon,
  PhotoIcon,
} from "./PostWriteContent.styles";

type Props = {};

const PostWriteContentComponent: React.FC<Props> = () => {
  const editerRef = useRef<HTMLTextAreaElement>(null);
  const [markDownValue, setMarkDownValue] = useState("");

  const handleMarkdownValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkDownValue(e.target.value);
  };

  return (
    <PostWriteContentContainer>
      <MarkDownContainer>
        <PostWriteHeaderComponent />
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
          <MarkDownTool>
            <PhotoIcon />
          </MarkDownTool>
        </MarkDownToolContainer>
        <MarkDownEditer
          onKeyDown={useKeyDown(editerRef)}
          ref={editerRef}
          value={markDownValue}
          onChange={handleMarkdownValue}
        />
      </MarkDownContainer>
      <PreviewContainer>
        <PostTitle>
          TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
        </PostTitle>
        <PreviewComponent markDownValue={markDownValue} />
      </PreviewContainer>
    </PostWriteContentContainer>
  );
};

export default PostWriteContentComponent;
