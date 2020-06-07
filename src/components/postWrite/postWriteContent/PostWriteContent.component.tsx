import React, { useRef, useState } from "react";

import { useKeyDown } from "../../../utils/markdown.utils";

import PreviewComponent from "../../preview/Preview.component";
import PostWriteHeaderComponent from "../postWriteHeader/PostWriteHeader.component";
import { PostTitle } from './PostWriteContent.styles';

import {
  PostWriteContentContainer,
  MarkDownContainer,
  MarkDownToolContainer,
  MarkDownEditer,
  PreviewContainer,
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
        <PostWriteHeaderComponent></PostWriteHeaderComponent>
        <MarkDownToolContainer></MarkDownToolContainer>
        <MarkDownEditer
          onKeyDown={useKeyDown(editerRef)}
          ref={editerRef}
          value={markDownValue}
          onChange={handleMarkdownValue}
        />
      </MarkDownContainer>
      <PreviewContainer>
        <PostTitle>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</PostTitle>
        <PreviewComponent markDownValue={markDownValue} />
      </PreviewContainer>
    </PostWriteContentContainer>
  );
};

export default PostWriteContentComponent;
