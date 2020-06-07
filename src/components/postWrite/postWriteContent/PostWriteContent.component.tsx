import React, { useRef, useState } from "react";
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

  const useTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 9) {
      e.preventDefault();

      const value = editerRef.current!.value;
      const selectionStart = editerRef.current!.selectionStart;
      const selectionEnd = editerRef.current!.selectionEnd;
      editerRef.current!.value =
        value.substring(0, selectionStart) + '  ' + value.substring(selectionEnd);
      editerRef.current!.selectionStart = selectionEnd + 2 - (selectionEnd - selectionStart);
      editerRef.current!.selectionEnd = selectionEnd + 2 - (selectionEnd - selectionStart);

      return false;
    }
  };

  const handleMarkdownValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkDownValue(e.target.value);
  };

  return (
    <PostWriteContentContainer>
      <MarkDownContainer>
        <MarkDownToolContainer></MarkDownToolContainer>
        <MarkDownEditer
          onKeyDown={useTab}
          ref={editerRef}
          value={markDownValue}
          onChange={handleMarkdownValue}
        />
      </MarkDownContainer>
      <PreviewContainer></PreviewContainer>
    </PostWriteContentContainer>
  );
};

export default PostWriteContentComponent;
