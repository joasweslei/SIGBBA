import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'
import { TextFieldClean } from '../../../../app/components/TextFieldClean'
import { StyledLogin } from '../../Login/styles'
import { AxiosResponse } from 'axios'
import api from '../../../../config/api'

export interface UserFormProps {
  location?: Location
}

export const UserForm: React.FC<UserFormProps> = ({
  location
}: UserFormProps) => {
  const history = useHistory()

  const [id, setId] = useState<string | null>(null)
  const [username, setUsername] = useState('')

  const handleBackwardButtonClick = () => {
    history.push('/user')
  }

  const handleSave = async () => {
    let response: AxiosResponse
    if (!id) {
      response = await api.post('/users', {
        username,
        email: 'usuario1@hotmail.com',
        password: 111111
      })
      console.log(response)
    }
    // else {
    //   response = await api.put(`/aliment-basket/${id}`, {
    //     username,
    //     email: 'usuario1@hotmail.com',
    //     password: 111111
    //   })
    // }
    console.log(username)
    // if (response?.status === 200) {
    history.push('/login')
    // }
  }

  useEffect(() => {
    const params = new URLSearchParams(location?.search)
    const id = params.get('id')
    setId(id)
  }, [location])

  //TODO:
  // - criar router no back end
  // - cadastrar para testar o editar
  //  - criar post /get/put/delete

  useEffect(() => {
    // if (!id) {
    //   setRows([
    //     {
    //       id: '8e331141-d727-4f40-a00a-57a278ebdbbe',
    //       name: 'teste',
    //       description: 'teste'
    //     }
    //   ])
    // } else {
    //   ;
    ;(async () => {
      const response = await api.get(`/aliment-basket/${id}`)
      if (response.status === 200) {
        const { data } = response
        setUsername(data.name)
        // setDescription(data.description)
        // setRows(data.aliments)
      }
    })()
    // }
  }, [id])

  return (
    <FormContainer
      breadcrumbs={['Usuario', 'Cadastro Usuario']}
      onBackButtonClick={handleBackwardButtonClick}
      onSaveClick={handleSave}
      pageMode={id ? 'Edição' : 'Inserção'}
    >
      <StyledLogin>
        <TextFieldClean label="E-mail" type="" tamanho="25"></TextFieldClean>
        <TextFieldClean
          label="Nome de Usário"
          type=""
          value={username}
          tamanho="350"
          onChange={e => setUsername(e.target.value)}
        ></TextFieldClean>
        <TextFieldClean
          label="Senha"
          type="password"
          tamanho="25"
        ></TextFieldClean>
      </StyledLogin>
    </FormContainer>
  )
}
