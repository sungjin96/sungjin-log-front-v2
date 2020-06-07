import styled from "styled-components";
import CustomButton from "src/components/button/Button.component";

export const PostWriteBottomContainer = styled.div`
  padding: 2rem;
  height: 5rem;
  display: flex;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const Button = styled(CustomButton)`

  &:nth-child(2) {
    margin-left: auto;
    margin-right: 2rem;
  }
`;
