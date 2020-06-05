import React from "react";

import ProfileImage from "../../../../assets/images/my_image.png";

import {
  NavTitleContainer,
  NavTitle,
  NavInfo,
  NavSection,
  NavProfileContainer,
  NavProfileIconWrap,
  NavProfileIcon,
} from "../Nav.styles";

const NavActiveComponent: React.FC = () => {
  return (
    <>
      <NavSection>
        <NavProfileContainer>
          <NavProfileIconWrap>
            <NavProfileIcon src={ProfileImage} alt="프로필 사진" />
          </NavProfileIconWrap>
        </NavProfileContainer>

        <NavTitleContainer>
          <NavTitle>Sungjin.log</NavTitle>
          <NavInfo>
            혼자 개발 해보고 후회하고 반성하기위한 블로그 입니다.
          </NavInfo>
        </NavTitleContainer>
      </NavSection>
    </>
  );
};

export default NavActiveComponent;
