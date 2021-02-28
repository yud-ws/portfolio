import { Canvas } from 'react-three-fiber'
import Background from './three/light'
import styles from './layout.module.scss'
import { useRecoilValue } from 'recoil'
import { lightColorState } from '../atoms/atom'
import Header from '../components/Header'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
  const color = useRecoilValue(lightColorState)

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="images/face.png"
          sizes="96x96"
        ></link>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.page}>{children}</div>
        </main>
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Copyright©Yudai Shiraishi. All Rights Reserved.
          </p>
        </footer>
        <div className={styles.canvas}>
          <Canvas camera={{ position: [0, 0, 100] }}>
            <Background color={color} />
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default Layout
