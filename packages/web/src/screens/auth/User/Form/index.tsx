import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'
import { TextFieldClean } from '../../../../app/components/TextFieldClean'
import { StyledLogin } from '../../Login/styles'

export const UserForm = () => {
  return (
    <FormContainer breadcrumbs={['Usuario', 'Cadastro Usuario']}>
      <StyledLogin>
        <TextFieldClean label="E-mail" type="" tamanho="25"></TextFieldClean>
        <TextFieldClean
          label="Nome de Usário"
          type=""
          tamanho="350"
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
