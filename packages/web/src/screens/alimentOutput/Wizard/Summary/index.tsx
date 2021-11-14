import { TextField } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../../app/components/CustomDivider';
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer';

import { Container } from './styles';

export const Summary: React.FC = () => {
  const history = useHistory()

  const handleSave = async () => {

  }

  const handleBack = async () => {
    history.push('/aliment-output/selecao-alimentos')
  }

  return (
    <FormContainer
      breadcrumbs={['Saída de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBack}
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
                <span>Alimento 2</span>
                <span>Alimento 3</span>
                <span>Alimento 4</span>
                <span>Alimento 5</span>
                <span>Alimento 6</span>
              </div>
            </div>
          </div>

          <div className="date">
            <div></div>
            <div className="content">
              <TextField
                id="date"
                label="Data de saída"
                type="date"
                defaultValue="2017-05-24"
                className="text-field"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <span>Quinta-feira</span>
            </div>
          </div>
        </div>
      </Container>
    </FormContainer>
  );
}
