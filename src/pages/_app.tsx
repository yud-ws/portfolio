import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/global.scss'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default App
