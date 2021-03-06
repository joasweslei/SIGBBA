import { Checkbox, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomDivider from '../../../app/components/CustomDivider';
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer';
import api from '../../../config/api';
import { Container } from './styles';

// import { Container } from './styles';

interface AlimentFormProps {
  location?: Location
}


export const AlimentForm: React.FC<AlimentFormProps> = ({
  location
}) => {
  const history = useHistory()

  const [id, setId] = useState<string | null>(null)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storagePlace, setStoragePlace] = useState("");
  const [type, setType] = useState("");
  const [isPerishable, setIsPerishable] = useState(false);

  const handleSave = async () => {
    let response: AxiosResponse
    if (!id) {
      response = await api.post('/aliment', {
        name,
        description,
        storagePlace,
        typeFood: type,
        perishable: isPerishable
      })
    } else {
      response = await api.put(`/aliment/${id}`, {
        name,
        description,
        storagePlace,
        typeFood: type,
        perishable: isPerishable
      })
    }

    if (response?.status === 200) {
      history.push('/aliment');
    }
  }

  const handleBack = async () => {
    history.push('/aliment')
  }

  useEffect(() => {
    if (id) {
      ;(async () => {
        const response = await api.get(`/aliment/${id}`)
        if (response.status === 200) {
          const { data } = response

          setName(data.name)
          setDescription(data.description)
          setStoragePlace(data.storagePlace)
          setType(data.typeFood);
          setIsPerishable(data.perishable)

        }
      })()
    }
  }, [id])

  useEffect(() => {
    const params = new URLSearchParams(location?.search)
    const id = params.get('id')
    setId(id)
  }, [location])

  return (
    <div>
      <FormContainer
        breadcrumbs={['Alimentos', 'Novo Alimento']}
        onBackButtonClick={handleBack}
        onSaveClick={handleSave}
        pageMode={id ? 'Edi????o' : 'Inser????o'}
      >
        <Container>
          <CustomDivider title="Informa????es do alimento" />
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            id="outlined-basic"
            label="Nome do alimento"
            variant="outlined"
          />

          <TextField
            value={description}
            onChange={e => setDescription(e.target.value)}
            id="outlined-basic"
            label="Descri????o"
            variant="outlined"
          />

          <TextField
            value={storagePlace}
            onChange={e => setStoragePlace(e.target.value)}
            id="outlined-basic"
            label="Local de armazenamento"
            variant="outlined"
          />

          <TextField
            value={type}
            onChange={e => setType(e.target.value)}
            id="outlined-basic"
            label="Classifica????o do alimento"
            variant="outlined"
          />

          <div>
            <span>Perec??vel?</span>
            <Checkbox checked={isPerishable} onChange={() => setIsPerishable(!isPerishable)} />
          </div>
        </Container>
      </FormContainer>
    </div>
  );
}
