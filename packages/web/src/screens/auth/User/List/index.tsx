import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid'
import DefaultContainer from '../../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'

export const User = () => {
  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'integer', width: 90 },
    { field: 'login', headerName: 'Login', type: 'string', width: 130 },
    {
      field: 'email',
      headerName: 'E-mail',
      type: 'string',
      flex: 1
    },
    {
      field: 'active',
      headerName: 'Ativo',
      type: 'string',
      width: 160,
      align: 'center'
    }
  ]

  const rows: GridRowsProp = [
    {
      id: 1,
      login: 'Usuario 1',
      email: 'usuario1@gmail.com',
      active: 'ativo'
    },
    {
      id: 2,
      login: 'Usuario 2',
      email: 'usuario2@gmail.com',
      active: 'desativado'
    },
    {
      id: 3,
      login: 'Usuario 3',
      email: 'usuario3@gmail.com',
      active: 'ativo'
    }
  ]

  return (
    <DefaultContainer breadcrumbs={['Usuários']}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50, 100]}
        paginationMode="server"
        pagination={true}
        autoHeight
        checkboxSelection
      />
    </DefaultContainer>
  )
}
