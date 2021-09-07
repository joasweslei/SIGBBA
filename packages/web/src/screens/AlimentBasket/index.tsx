import React from 'react'
import { CustomTable } from '../../app/components/CustomTable'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

import { Edit } from '@material-ui/icons'

export const AlimentBasket = () => {
  const cestas = [
    {
      id: '1',
      name: 'Cesta Básica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipis',
      aliments: [
        {
          id: '1',
          name: 'Alimento 1'
        }
      ],
      families: ''
    },
    {
      id: '1',
      name: 'Cesta Básica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipis',
      aliments: [
        {
          id: '1',
          name: 'Alimento 1'
        }
      ],
      families: ''
    },
    {
      id: '1',
      name: 'Cesta Básica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipis',
      aliments: [
        {
          id: '1',
          name: 'Alimento 1'
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
            <StyledTableCell align="center">
              QUANTIDADE ALIMENTOS
            </StyledTableCell>
          </>
        }
        itens={cestas.map(cesta => (
          <StyledTableRow>
            <StyledTableCell align="center">
              <Edit />
            </StyledTableCell>
            <StyledTableCell>{cesta.name}</StyledTableCell>
            <StyledTableCell>{cesta.description}</StyledTableCell>
            <StyledTableCell align="center">
              {cesta.aliments.length}
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        ))}
        itemCount={0}
        rowsPerPage={5}
        currentPage={0}
        handleChangePage={() => {}}
      />
    </DefaultContainer>
  )
}
