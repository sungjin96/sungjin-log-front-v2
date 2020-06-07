import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  value: string;
  language: string;
};

const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={vs} highlighter={"prism" || "hljs"}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
