import styled from '@emotion/styled';

export const List = styled.div`
  margin-top: 2.5rem;

  overflow-y: scroll;
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;

  &::-webkit-scrollbar  {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #888888;
  }
`;
