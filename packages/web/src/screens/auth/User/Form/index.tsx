import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'
import { TextFieldClean } from '../../../../app/components/TextField'
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
  const [email, setEmail] = useState('')
  const [userpassword, setUserPassword] = useState('')

  const handleBackwardButtonClick = () => {
    history.push('/user')
  }

  const handleSave = async () => {
    let response: AxiosResponse
    if (!id) {
      response = await api.post('/users', {
        username,
        email,
        userpassword
      })
    } else {
      response = await api.put(`/users/${id}`, {
        username,
        email,
        userpassword
      })
    }
    if (response?.status === 200) {
      history.push('/login')
    }
  }

  useEffect(() => {
    ;(async () => {
      const response = await api.get(`/users/${id}`)
      if (response.status === 200) {
        const { data } = response
        setUsername(data.username)
        setEmail(data.email)
        setUserPassword(data.userpassword)
      }
    })()
  }, [id])

  useEffect(() => {
    const params = new URLSearchParams(location?.search)
    const id = params.get('id')
    setId(id)
  }, [location])

  return (
    <FormContainer
      breadcrumbs={['Usuario', 'Cadastro Usuario']}
      onBackButtonClick={handleBackwardButtonClick}
      onSaveClick={handleSave}
      pageMode={id ? 'Edição' : 'Inserção'}
    >
      <StyledLogin>
        <TextFieldClean
          label="E-mail"
          type=""
          tamanho="25"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></TextFieldClean>
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
          value={userpassword}
          onChange={e => setUserPassword(e.target.value)}
        ></TextFieldClean>
      </StyledLogin>
    </FormContainer>
  )
}
