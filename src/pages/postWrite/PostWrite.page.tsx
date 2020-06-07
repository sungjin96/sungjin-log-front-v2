import React from "react";

import PostWriteHeaderComponent from "../../components/postWrite/postWriteHeader/PostWriteHeader.component";
import PostWriteContentComponent from "../../components/postWrite/postWriteContent/PostWriteContent.component";
import PostWriteBottomComponent from '../../components/postWrite/postWriteBottom/PostWriteBottom.component';

import { PostWriteContainer } from "./PostWrite.styles";

const PostWritePage: React.FC = () => {
  return (
    <PostWriteContainer>
      <PostWriteHeaderComponent />
      <PostWriteContentComponent />
      <PostWriteBottomComponent />
    </PostWriteContainer>
  );
};

export default PostWritePage;
