import { Box, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import { CustomDropdown } from '../../../app/components/CustomDropDown'
import { useHistory } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import api from '../../../config/api'
import { GridRowsProp } from '@mui/x-data-grid'

export interface FarmerFormProps {
  location?: Location
}

const FarmerForm: React.FC<FarmerFormProps> = ({
  location
}: FarmerFormProps) => {

  const escolhas = ['Masculino', 'Feminino', 'Outros']
  const alimentos = ['Abacate', 'Maça', 'Batata', 'Arroz']
  const history = useHistory() 
  const [id, setId] = useState<string | null>(null)
  const [nameResp1, setnameResp1] = useState('')
  const [cpfResp1, setcpfResp1] = useState('')
  const [nameMotherResp1, setnameMotherResp1] = useState('')
  const [dateBirthResp1, setdateBirthResp1] = useState('')
  const [sexResp1, setsexResp1] = useState('')
  const [nameResp2, setnameResp2] = useState('')
  const [cpfResp2, setcpfResp2] = useState('')
  const [nameMotherResp2, setnameMotherResp2] = useState('')
  const [dateBirthResp2, setdateBirthResp2] = useState('')
  const [sexResp2, setsexResp2] = useState('')
  const [address, setaddress] = useState('')
  const [numDep, setnumDep] = useState('')
  const [phone, setphone] = useState('')
  const [nis, setnis] = useState('')
  const [city, setcity] = useState('')
  const [uf, setuf] = useState('')
  const [validateOflicense, setvalidateOflicense] = useState('')
  const [entityServide, setentityServide] = useState('')
  const [dap, setdap] = useState('')
  const [validateDap, setvalidateDap] = useState('')
  const [cardProducer, setcardProducer] = useState('')
  const [passwordProducer, setpasswordProducer] = useState('')
  const [foodGet, setfoodGet] = useState('')
  const [order, setorder] = useState('')
  
  const handleBackwardButtonClick = () => {
    history.push('/farmer')
  }

  const handleSave = async () => {
    let response: AxiosResponse
    if (!id) {
      response = await api.post('/farmer', {
        nameResp1,
        cpfResp1,
        /*nameMotherResp1,
        dateBirthResp1,
        sexResp1,
        nameResp2,
        cpfResp2,
        nameMotherResp2,
        dateBirthResp2,
        sexResp2,
        address,
        numDep,
        phone,
        nis,
        city,
        uf,
        validateOflicense,
        entityServide,
        dap,
        validateDap,
        cardProducer,
        passwordProducer,
        foodGet,
        order*/
      })
    } else {
      response = await api.put(`/farmer/${id}`, {
        nameResp1,
        cpfResp1,
        /*nameMotherResp1,
        dateBirthResp1,
        sexResp1,
        nameResp2,
        cpfResp2,
        nameMotherResp2,
         dateBirthResp2,
        sexResp2,
        address,
        numDep,
        phone,
        nis,
        city,
        uf,
        validateOflicense,
        entityServide,
        dap,
        validateDap,
        cardProducer,
        passwordProducer,
        foodGet,
        order*/
      })
    }

    if (response?.status === 200) {
      history.push('farmer')
    }
  }

  /*useEffect(() => {
    ;(async () => {
      const response = await api.get(`/farmer/${id}`)
      if (response.status === 200) {
        const { data } = response
        setRows (data.username)
      }
    })()
  }, [id])*/

  /*useEffect(() => {
    const params = new URLSearchParams(location?.search)
    const id = params.get('id')
    setId(id)
  }, [location])*/

  return (
    <FormContainer
      breadcrumbs={['Agricultor', 'Cadastrar Agricultor']}
      onBackButtonClick={handleBackwardButtonClick}
      onSaveClick={handleSave}
      pageMode={id ? 'Edição' : 'Inserção'}
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
          value = {nameResp1}
          onChange={e => setnameResp1(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
          value = {cpfResp1}
          onChange={e => setcpfResp1(e.target.value)}
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
          value = {nameMotherResp1}
          onChange={e => setnameMotherResp1(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
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
          value = {nameResp2}
          onChange={e => setnameResp2(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
          value = {cpfResp2}
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
          value = {nameMotherResp2}
          onChange={e => setnameMotherResp2(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
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
          value = {address}
          onChange={e => setaddress(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Município"
          variant="outlined"
          value = {city}
          onChange={e => setcity(e.target.value)}
        />
        <TextField
          sx={{ width: '10ch' }}
          id="outlined-basic"
          label="UF"
          variant="outlined"
          value = {uf}
          onChange={e => setuf(e.target.value)}
        />
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          value = {phone}
          onChange={e => setphone(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="NIS"
          variant="outlined"
          value = {nis}
          onChange={e => setnis(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade do Alvará"
          variant="outlined"
          value = {validateOflicense}
          onChange={e => setvalidateOflicense(e.target.value)}
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
          value = {dap}
          onChange={e => setdap(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade DAPI"
          variant="outlined"
          value = {validateDap}
          onChange={e => setvalidateDap(e.target.value)}
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
          value = {cardProducer}
          onChange={e => setcardProducer(e.target.value)}
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Senha Cartão Produtor"
          type="password"
          variant="outlined"
          value = {passwordProducer}
          onChange={e => setpasswordProducer(e.target.value)}
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

export default FarmerForm
