import React from 'react'

import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'

const Home: React.FC = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <h1>Teste</h1>
    </DefaultContainer>
  )
}

export default Home
