import React from "react";

import PostWriteContentComponent from "../../components/postWrite/postWriteContent/PostWriteContent.component";
import PostWriteBottomComponent from '../../components/postWrite/postWriteBottom/PostWriteBottom.component';

import { PostWriteContainer } from "./PostWrite.styles";

const PostWritePage: React.FC = () => {

  return (
    <PostWriteContainer>
      <PostWriteContentComponent />
      <PostWriteBottomComponent />
    </PostWriteContainer>
  );
};

export default PostWritePage;
