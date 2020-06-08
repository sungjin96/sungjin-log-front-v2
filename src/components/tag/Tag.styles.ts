import styled from 'styled-components';

export const TagItem = styled.div`
  margin-right: 1rem;
  height: 2rem;
  padding: 0.4rem 1.1rem;
  border-radius: 100px;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;