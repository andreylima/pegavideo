import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import GlobalStyle from '../styles/globals'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
 
  return (
      <RecoilRoot>
          <Component {...pageProps} />
        <GlobalStyle />
      </RecoilRoot>
  )
}

export default MyApp
