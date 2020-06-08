import React, { useRef, useState } from "react";

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

type Props = {};

const PostWriteContentComponent: React.FC<Props> = () => {
  const editerRef = useRef(null);
  const [markDownValue, setMarkDownValue] = useState("");
  const [tags, setTags] = useState<InputTag[]>([]);
  const [inputs, setInputs] = useState({
    title: "",
    tag: "",
    imgUrl: "",
  });
  const { title, tag, imgUrl } = inputs;

  const handleMarkdownValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkDownValue(e.target.value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === "Enter" && tag !== "" && tags.length < 5) {
      setTags([...tags, { content: tag }]);
      setInputs({ ...inputs, tag: "" });
    }
  };

  const handleTagClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setTags(tags.filter((data, idx) => idx !== index));
  };

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
