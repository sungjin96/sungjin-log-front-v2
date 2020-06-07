import React from "react";

import { Preview } from "./Preview.styles";
import CodeBlock from "../postWrite/codeBlock/CodeBlock.component";

type Props = {
  markDownValue: string;
};

const PreviewComponent: React.FC<Props> = ({ markDownValue }) => {
  return (
    <Preview
      source={markDownValue}
      renderers={{ code: CodeBlock }}
      escapeHtml={false}
    />
  );
};

export default PreviewComponent;
