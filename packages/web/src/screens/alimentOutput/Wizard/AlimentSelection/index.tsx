import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../../app/components/CustomDivider';
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer';

import { Container, CustomList } from './styles';

export const AlimentSelection: React.FC = () => {
  const history = useHistory()

  const handleBackwardButtonClick = () => {
    history.push('/aliment-basket');
  }

  const handleNext = async () => {
    history.push('/aliment-output/resume');
  }

  const handleBack = async () => {
    history.push('/aliment-output/entidade')
  }

  return (
    <FormContainer
      breadcrumbs={['Saída de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBackwardButtonClick}
      onNextClick={handleNext}
      onBackClick={handleBack}
      pageMode={'Inserção'}
    >
      <Container>
        <CustomDivider title="Alimentos" />
        <input className="search" placeholder="Pesquisar alimentos"></input>
        <CustomList>
          <div className="aliment">
            <div className="aliment-header">
              <input type="checkbox" />
              <div className="img"></div>
            </div>
            <div className="aliment-content">
              <span className="aliment-title">Título</span>
              <span className="aliment-subtitle">Subtítulo</span>
            </div>
            <div className="aliment-configs">
              <span>Quantidade:</span>
              <input className="quantity-input" type="number" />
              <select>
                <option value="unity">Unidade</option>
                <option value="kg">Kg</option>
              </select>
            </div>
          </div>

          <div className="aliment">
            <div className="aliment-header">
              <input type="checkbox" />
              <div className="img"></div>
            </div>
            <div className="aliment-content">
              <span className="aliment-title">Título</span>
              <span className="aliment-subtitle">Subtítulo</span>
            </div>
            <div className="aliment-configs">
              <span>Quantidade:</span>
              <input className="quantity-input" type="number" />
              <select>
                <option value="unity">Unidade</option>
                <option value="kg">Kg</option>
              </select>
            </div>
          </div>
        </CustomList>
      </Container>
    </FormContainer>
  );
}
