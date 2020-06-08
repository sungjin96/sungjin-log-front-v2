import React from "react";
import { TagItem } from "./Tag.styles";

type Props = {
  handleTagClick: any;
  index: number;
};

const TagComponent: React.FC<Props> = ({ handleTagClick, children, index }) => {
  return (
    <TagItem onClick={(e) => handleTagClick(e, index)}>{children}</TagItem>
  );
};

export default TagComponent;
