import React from 'react'

import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'

const Home: React.FC = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <h1>Home</h1>
    </DefaultContainer>
  )
}

export default Home
