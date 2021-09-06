import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'

import Routes from './screens/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer autoClose={3000} position="top-right" />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
