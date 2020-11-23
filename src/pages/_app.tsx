import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'

interface CustomAppProps extends AppProps {}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
