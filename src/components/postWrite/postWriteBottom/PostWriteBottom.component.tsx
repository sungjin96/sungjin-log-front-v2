import React from "react";

import { PostWriteBottomContainer, Button } from "./PostWriteBottom.styles";

type Props = {};

const PostWriteBottomComponent: React.FC<Props> = () => {
  return (
    <PostWriteBottomContainer>
      <Button>뒤로가기</Button>
      <Button>썸네일</Button>
      <Button>저장</Button>
    </PostWriteBottomContainer>
  );
};

export default PostWriteBottomComponent;
