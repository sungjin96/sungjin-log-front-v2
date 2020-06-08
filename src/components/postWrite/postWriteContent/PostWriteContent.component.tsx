import React from "react";

import { useKeyDown } from "../../../utils/markdown.utils";

import { InputTag } from "../../../types/tag";

import PreviewComponent from "../../preview/Preview.component";
import PostWriteHeaderComponent from "../postWriteHeader/PostWriteHeader.component";
import MarkDownToolComponent from "../markDownTool/MarkDownTool.component";

import {
  PostWriteContentContainer,
  MarkDownContainer,
  MarkDownEditer,
  PreviewContainer,
  PostTitle,
} from "./PostWriteContent.styles";

type Props = {
  editerRef: any;

  title: string;
  tag: string;
  markDownValue: string;
  tags: InputTag[];

  handleMarkdownValue: any;
  handleInput: any;
  handleTagKeyPress: any;
  handleTagClick: any;
};

const PostWriteContentComponent: React.FC<Props> = ({
  editerRef,
  markDownValue,
  tag,
  title,
  handleInput,
  handleMarkdownValue,
  handleTagClick,
  handleTagKeyPress,
  tags,
}) => {
  return (
    <PostWriteContentContainer>
      <MarkDownContainer>
        <PostWriteHeaderComponent
          handleInput={handleInput}
          title={title}
          handleTagClick={handleTagClick}
          handleTagKeyPress={handleTagKeyPress}
          tag={tag}
          tags={tags}
        />
        <MarkDownToolComponent editerRef={editerRef} />
        <MarkDownEditer
          onKeyDown={useKeyDown(editerRef)}
          ref={editerRef}
          value={markDownValue}
          onChange={handleMarkdownValue}
        />
      </MarkDownContainer>
      <PreviewContainer>
        <PostTitle>{title}</PostTitle>
        <PreviewComponent markDownValue={markDownValue} />
      </PreviewContainer>
    </PostWriteContentContainer>
  );
};

export default PostWriteContentComponent;
