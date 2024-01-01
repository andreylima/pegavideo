import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '~/styles/theme'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
          <Component {...pageProps} />
        <GlobalStyle />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
