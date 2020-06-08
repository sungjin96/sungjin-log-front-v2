import React, { useRef, useState } from "react";

import { formatFileName, uploadImage } from "../../utils/upload";

import PostWriteContentComponent from "../../components/postWrite/postWriteContent/PostWriteContent.component";
import PostWriteBottomComponent from "../../components/postWrite/postWriteBottom/PostWriteBottom.component";

import { PostWriteContainer } from "./PostWrite.styles";

import { InputTag } from "src/types/tag";

const PostWritePage: React.FC = () => {
  const editerRef = useRef(null);
  const refFileInput = useRef<HTMLInputElement>(null);
  const [markDownValue, setMarkDownValue] = useState("");
  const [tags, setTags] = useState<InputTag[]>([]);
  const [inputs, setInputs] = useState({
    title: "",
    tag: "",
    imgUrl: "",
  });
  const { title, tag } = inputs;

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

  const handleFileClick = () => {
    refFileInput.current?.click();
  };

  const handleFileChange = async () => {
    const files = refFileInput.current?.files;
    if (!files) return;
    const file = files[0];
    const fileName: string = formatFileName(file.name);

    const result: any = await uploadImage(files[0], fileName);
    console.log(result);

    setInputs({
      ...inputs,
      imgUrl: `https://sungjin-log-file-server.s3.ap-northeast-2.amazonaws.com/${fileName}`,
    });
  };

  return (
    <PostWriteContainer>
      <PostWriteContentComponent
        editerRef={editerRef}
        markDownValue={markDownValue}
        title={title}
        tag={tag}
        tags={tags}
        handleMarkdownValue={handleMarkdownValue}
        handleInput={handleInput}
        handleTagKeyPress={handleTagKeyPress}
        handleTagClick={handleTagClick}
      />
      <PostWriteBottomComponent
        refFileInput={refFileInput}
        handleFileClick={handleFileClick}
        handleFileChange={handleFileChange}
      />
    </PostWriteContainer>
  );
};

export default PostWritePage;
