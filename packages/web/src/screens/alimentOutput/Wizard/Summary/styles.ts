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
          max-width: 200px;
          overflow-x: scroll;

          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }

    .date {
      display: grid;
      grid-template-rows: 60px 1fr;

      .content {
        display: flex;
        align-items: start;
        gap: 20px;
      }

      .text-field {
        margin-left: 10;
        margin-right: 10;
        width: 250px;
      }
    }
  }
`;
