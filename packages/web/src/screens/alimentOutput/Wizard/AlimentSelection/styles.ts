import styled from '@emotion/styled'
import { List } from '../../../../app/components/List';

export const Container = styled.form`
  .search {
    margin-top: 1rem;
    height: 40px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
  }
`;

export const CustomList = styled(List)`
  height: 500px;

  .aliment {
    margin-top: 1rem;
    height: 60px;
    width: 100%;
    border: 1px solid black;
    display: flex;
    padding: 0.5rem 1rem;

    align-items: center;
    justify-content: flex-start;

    .aliment-header {
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
      margin-left: 0.6rem;
      height: 40px;
      width: 40px;
      background: #ccc;
    }
  }

    .aliment-content {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;

      span.aliment-title {
        font-size: 1rem;
        font-weight: bold;
      }

      span.aliment-subtitle {
        font-size: 14px;
        font-weight: 400;
        color: #ccc;
      }
    }

    .aliment-configs {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      input {
        width: 60px;
        border: none;
        border-bottom: 1px solid black;
        margin-left: 10px;
        text-align: center;
      }

      select {
        margin-left: 5px;
        border: none;
        background: white;
      }
    }
  }
`;
