import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../../app/components/CustomDivider';
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer';

import { Container } from './styles';

export const Summary: React.FC = () => {
  const history = useHistory()

  const handleBackwardButtonClick = () => {
    history.push('/aliment-basket')
  }

  const handleSave = async () => {

  }

  const handleBack = async () => {
    history.push('/aliment-output/selecao-alimentos')
  }

  return (
    <FormContainer
      breadcrumbs={['Saída de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBackwardButtonClick}
      onSaveClick={handleSave}
      onBackClick={handleBack}
      pageMode={'Inserção'}
    >
      <Container>
        <CustomDivider title="Resumo" />
        <div className="content">
          <div className="summary">
            <div>
              <span>Entidade:</span>
              <span>Teste</span>
            </div>

            <div className="aliment-list">
              <span>Alimentos:</span>
              <div className="list">
                <span>Alimento 1</span>
                <span>Alimento 1</span>
                <span>Alimento 1</span>
              </div>
            </div>
          </div>

          <div className="date">
            <input type="text" />
          </div>
        </div>
      </Container>
    </FormContainer>
  );
}
