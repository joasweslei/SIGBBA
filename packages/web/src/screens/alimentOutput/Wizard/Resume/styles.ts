import styled from '@emotion/styled';

export const Container = styled.div`
  .content {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;

    .summary {
      display: grid;
      grid-template-rows: 100px 1fr;

      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 90px;
      }

      .aliment-list {
        div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }
  }
`;
