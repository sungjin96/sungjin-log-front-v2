import React from "react";

import { PostWriteBottomContainer, Button } from "./PostWriteBottom.styles";

type Props = {
  refFileInput: any;
  handleFileClick: any;
  handleFileChange: any;
  handleConfigClick: any;
};

const PostWriteBottomComponent: React.FC<Props> = ({
  handleFileChange,
  handleFileClick,
  refFileInput,
  handleConfigClick,
}) => {
  return (
    <PostWriteBottomContainer>
      <Button>뒤로가기</Button>
      <Button onClick={handleConfigClick}>설정</Button>
      <Button onClick={handleFileClick}>썸네일</Button>
      <Button >저장</Button>
      <input
        type="file"
        name="file"
        id="file"
        style={{ display: "none" }}
        ref={refFileInput}
        onChange={handleFileChange}
      />
    </PostWriteBottomContainer>
  );
};

export default PostWriteBottomComponent;
