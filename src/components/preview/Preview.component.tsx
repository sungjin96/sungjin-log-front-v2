import React from "react";

import { formatHtml } from "src/utils/markdown.utils";

import CodeBlock from "../postWrite/codeBlock/CodeBlock.component";

import { Preview } from "./Preview.styles";

type Props = {
  markDownValue: string;
};

const PreviewComponent: React.FC<Props> = ({ markDownValue }) => {
  return (
    <Preview
      source={formatHtml(markDownValue)}
      renderers={{ code: CodeBlock }}
      escapeHtml={false}
    />
  );
};

export default PreviewComponent;
