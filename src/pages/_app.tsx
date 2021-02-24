import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
