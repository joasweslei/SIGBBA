import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

import Routes from './screens/routes'

import 'react-toastify/dist/ReactToastify.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import theme from './styles/theme'
import { ThemeProvider } from '@emotion/react'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} position="top-right" />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
