import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../../app/components/CustomDivider';
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer';

import { Container, CustomList } from './styles';

export const EntitySelection: React.FC = () => {
  const history = useHistory()

  const handleBackwardButtonClick = () => {
    history.push('/aliment-basket')
  }

  const handleNext = async () => {
    history.push('/aliment-output/selecao-alimentos');
  }

  return (
    <FormContainer
      breadcrumbs={['Saída de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBackwardButtonClick}
      onNextClick={handleNext}
      pageMode={'Inserção'}
    >
      <Container>
        <CustomDivider title="Seleção da entidade" />
        <input className="search" placeholder="Pesquisar entidades"></input>
        <CustomList>
          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>

          <div className="entity">
            <span className="entity-title">Título</span>
            <span className="entity-subtitle">Subtítulo</span>
          </div>
        </CustomList>
      </Container>
    </FormContainer>
  );
}
