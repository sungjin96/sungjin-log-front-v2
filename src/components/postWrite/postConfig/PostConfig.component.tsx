import React from "react";
import {
  PostConfigContainer,
  ConfigContentContainer,
  BlockScreen,
} from "./PostConfig.styles";

type Props = {
  configClicked: boolean;
  handleConfigClick: any;
};

const PostConfigComponent: React.FC<Props> = ({
  configClicked,
  handleConfigClick,
}) => {
  return (
    <PostConfigContainer
      configClicked={configClicked}
    >
      <BlockScreen onClick={handleConfigClick}/>
      <ConfigContentContainer
        configClicked={configClicked}
      ></ConfigContentContainer>
    </PostConfigContainer>
  );
};

export default PostConfigComponent;
