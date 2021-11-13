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

  .entity {
    margin-top: 1rem;
    height: 60px;
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;

    cursor: pointer;

    &:hover {
      filter: opacity(0.7);
    }
  }

  .entity-title {
    font-size: 1rem;
    font-weight: bold;
  }

  .entity-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #ccc;
  }
`;
