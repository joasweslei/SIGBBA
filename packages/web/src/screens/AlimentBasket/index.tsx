import { Container } from '@material-ui/core'
import React from 'react'
import { CustomTable } from '../../app/components/CustomTable'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

export const AlimentBasket = () => {
  const cestas = [
    {
      id: '1',
      name: 'Cesta Básica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipis',
      aliments: [
        {
          id: '1',
          name: 'Alimento 1',
          description: 'asdasd',
          perishable: true,
          storagePlace: '0',
          typeFood: '0',
          alimentDonation: '0',
          unitType: '0',
          alimentOutputs: '0',
          price: 12.6,
          alimentOrder: 1
        }
      ],
      families: ''
    }
  ]

  return (
    <DefaultContainer breadcrumbs={['Cesta de alimentos']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCell>NOME CESTA</StyledTableCell>
            <StyledTableCell>DESCRIÇÃO</StyledTableCell>
            <StyledTableCell>QUANTIDADE ALIMENTOS</StyledTableCell>
          </>
        }
        itens={cestas.map(cesta => (
          <StyledTableRow>
            <StyledTableCell>{cesta.name}</StyledTableCell>
            <StyledTableCell>{cesta.description}</StyledTableCell>
            <StyledTableCell>{cesta.aliments.length}</StyledTableCell>
          </StyledTableRow>
        ))}
        itemCount={0}
        rowsPerPage={0}
        currentPage={0}
        handleChangePage={() => {}}
      />
    </DefaultContainer>
  )
}
