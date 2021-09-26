import { Box, TextField } from '@material-ui/core'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomDropdown } from '../../../../app/components/CustomDropDown'
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'
import api from '../../../../config/api'
import { useHistory } from 'react-router-dom'





  export interface EntityFormProps {
    location?: Location
  }

  export const EntityForm: React.FC<EntityFormProps> = ({
    location
  }: EntityFormProps) => {
    const history = useHistory()

  const escolhas = ['Masculino', 'Feminino', 'Outros']
  const alimentos = ['Beterraba', 'Maçã', 'batata', 'Arroz']

  const [idAgricultor, setidAgricultor] = useState<string | null>(null)
  const [nomeResp1, setnomeagri] = useState('')
  const [cpfResp1, setcpfResp] = useState('')
  const [sexoIndent1, setsexoIndent1] = useState('')
  const [maeResp1, setmaeResp1] = useState('')
  const [dataNasc1, setdataNasc1] = useState('')
  const [nomeResp2, setnomeResp2] = useState('')
  const [cpfResp2, setcpfResp2] = useState('')
  const [sexoIndent2, setsexoIndent2] = useState('')
  const [maeResp2, setmaeResp2] = useState('') 
  const [dataNasc2, setdataNasc2] = useState('')
  const [endereco, setendereco] = useState('')
  const [municipio, setmunicipio] = useState('')
  const [uf, setuf] = useState('')
  const [telefone, settelefone] = useState('')
  const [nis, setnis] = useState('')
  const [validAlvara, setvalidAlvara] = useState('')
  const [dapi, setdapi] = useState('')
  const [validDapi, setvalidDapi] = useState('')
  const [cartaoProdut, setcartaoProdut] = useState('')
  const [senhaCartaoProdut, setsenhaCartaoProdut] = useState('')
  const [alimentoAserComprado, setalimentoAserComprado] = useState('')

  const handleBackwardButtonClick = () => {
    history.push('/EntityBeneficiary')
  }

  const handleSave = async () => {
    let response: AxiosResponse
    if (!idAgricultor) {
      response = await api.post('/users', {
        idAgricultor,
        nomeResp1,
        cpfResp1,
        sexoIndent1,
        maeResp1,
        dataNasc1,
        nomeResp2,
        cpfResp2,
        sexoIndent2,
        maeResp2,
        dataNasc2,        
        endereco,
        municipio,
        uf,
        telefone,
        nis,
        validAlvara,
        dapi,
        validDapi,
        cartaoProdut,
        senhaCartaoProdut,
        alimentoAserComprado,


      })
    } else {
      response = await api.put(`/users/${idAgricultor}`, {
        idAgricultor,
        nomeResp1,
        cpfResp1,
        sexoIndent1,
        maeResp1,
        dataNasc1,
        nomeResp2,
        cpfResp2,
        sexoIndent2,
        maeResp2,
        dataNasc2,        
        endereco,
        municipio,
        uf,
        telefone,
        nis,
        validAlvara,
        dapi,
        validDapi,
        cartaoProdut,
        senhaCartaoProdut,
        alimentoAserComprado,
      })
    }
    if (response?.status === 200) {
      history.push('/login')
    }

  }

  useEffect(() => {
    ;(async () => {
      const response = await api.get(`/EntityBeneficiary/${idAgricultor}`)
      if (response.status === 200) {
        const { data } = response        
        setnomeagri(data.nomeResp1)
        setidAgricultor(data.idAgricultor)
        setcpfResp(data.cpfResp)
        setsexoIndent1(data.sexoIndent1)
        setmaeResp1(data.maeResp1)
        setdataNasc1(data.dataNasc1)
        setnomeResp2(data.nomeResp2)
        setcpfResp2(data.cpfResp2)
        setsexoIndent2(data.sexoIndent2)
        setmaeResp2(data.maeResp2)
        setdataNasc2(data.dataNasc2)
        setendereco(data.endereco)
        setmunicipio(data.municipio)
        setuf(data.uf)
        settelefone(data.telefone)
        setnis(data.nis)
        setvalidAlvara(data.validAlvara)
        setdapi(data.dapi)
        setvalidDapi(data.validDapi)
        setcartaoProdut(data.cartaoProdut)
        setsenhaCartaoProdut(data.senhaCartaoProdut)
        setalimentoAserComprado(data.alimentoAserComprado)
      }
    })()
  }, [idAgricultor])


  useEffect(() => {
    const params = new URLSearchParams(location?.search)
    const idAgricultor = params.get('idAgricultor')
    setidAgricultor(idAgricultor)
  }, [location])


  return (
    <FormContainer breadcrumbs={['Agricultor', 'Cadastrar Agricultor']}
    onBackButtonClick={handleBackwardButtonClick}
    onSaveClick={handleSave}
    
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Responsável"
          variant="outlined"
          value={nomeResp1}
          onChange={e => setnomeagri(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
          value={cpfResp1}
          onChange={e => setcpfResp(e.target.value)}
        />
        <CustomDropdown
          title="Como você se identifica"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown>
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável"
          variant="outlined"
          value={maeResp1}
          onChange={e => setmaeResp1(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
          value={dataNasc1}
          onChange={e => setdataNasc1(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Responsável"
          variant="outlined"
          value={nomeResp2}
          onChange={e => setnomeResp2(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
          value={cpfResp2}
          onChange={e => setcpfResp2(e.target.value)}
        />
        <CustomDropdown
          title="Como você se identifica"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown>
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
          value={dataNasc2}
          onChange={e => setdataNasc2(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '64ch' }}
          id="outlined-basic"
          label="Endereço Completo"
          variant="outlined"
          value={endereco}
          onChange={e => setendereco(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Município"
          variant="outlined"
          value={municipio}
          onChange={e => setmunicipio(e.target.value)}
        />
        <TextField
          sx={{ width: '10ch' }}
          id="outlined-basic"
          label="UF"
          variant="outlined"
          value={uf}
          onChange={e => setuf(e.target.value)}
        />
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          value={telefone}
          onChange={e => settelefone(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="NIS"
          variant="outlined"
          value={nis}
          onChange={e => setnis(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade do Alvará"
          variant="outlined"   
          value={validAlvara}
          onChange={e => setvalidAlvara(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '50ch' }}
          id="outlined-basic"
          label="DAPI"
          variant="outlined"
          value={dapi}
          onChange={e => setdapi(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade DAPI"
          variant="outlined"
          value={validDapi}
          onChange={e => setvalidDapi(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '50ch' }}
          id="outlined-basic"
          label="Cartão produtor"
          variant="outlined"
          value={cartaoProdut}
          onChange={e => setcartaoProdut(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Senha Cartão Produtor"
          type="password"
          variant="outlined"
          value={senhaCartaoProdut}
          onChange={e => setsenhaCartaoProdut(e.target.value)}
        />
        <CustomDropdown
          title="Alimento à ser comprado"
          opcoes={alimentos}
          size="24ch"          
        ></CustomDropdown>
      </Box>
    </FormContainer>
  )
}

export default EntityForm
