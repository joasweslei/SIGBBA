import React from 'react'
import { CustomTable } from '../../app/components/CustomTable'

import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

const Home: React.FC = () => {
  const usuarios = [
    {
      nome: 'a',
      idade: 'teste',
      cep: 'teste'
    },
    {
      nome: 'a',
      idade: 'teste',
      cep: 'teste'
    }
  ]

  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Idade</StyledTableCell>
            <StyledTableCell>CEP</StyledTableCell>
          </>
        }
        itens={
          <>
            {usuarios.map(usuario => (
              <StyledTableRow>
                <StyledTableCell>{usuario.nome}</StyledTableCell>
                <StyledTableCell>Teste</StyledTableCell>
                <StyledTableCell>Teste</StyledTableCell>
              </StyledTableRow>
            ))}
          </>
        }
      />
    </DefaultContainer>
  )
}

export default Home
