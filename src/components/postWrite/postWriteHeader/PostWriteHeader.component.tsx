import React from "react";
import { InputTag } from "../../../types/tag";
import TagComponent from "../../tag/Tag.component";
import {
  PostWriteHeaderContainer,
  TitleInputContainer,
  PostTagInputContainer,
  PostTagInput,
  TitleInput,
} from "./PostWriteHeader.styled";

type Props = {
  title: string;
  handleInput: any;
  handleTagClick: any;
  handleTagKeyPress: any;
  tag: string;
  tags: InputTag[];
};

const PostWriteHeaderComponent: React.FC<Props> = ({
  title,
  handleInput,
  handleTagClick,
  handleTagKeyPress,
  tag,
  tags,
}) => {
  return (
    <PostWriteHeaderContainer>
      <TitleInputContainer>
        <TitleInput
          value={title}
          onChange={handleInput}
          name="title"
          placeholder="제목을 입력해주세요..."
        />
      </TitleInputContainer>
      <PostTagInputContainer>
        {tags.map((tag, index) => (
          <TagComponent
            key={index}
            index={index}
            handleTagClick={handleTagClick}
          >
            {tag.content}
          </TagComponent>
        ))}

        <PostTagInput
          placeholder="태그를 입력해주세요.."
          onChange={handleInput}
          value={tag}
          onKeyPress={handleTagKeyPress}
          name="tag"
        />
      </PostTagInputContainer>
    </PostWriteHeaderContainer>
  );
};

export default PostWriteHeaderComponent;
