import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { lightColorState } from '../atoms/atom'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  // eslint-disable-next-line quotes
  const text = "Yudai Shiraishi's portfolio"
  const [color, setColor] = useRecoilState(lightColorState)

  return (
    <>
      <Head>
        <title>home | yudai portfolio</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>{text}</h1>
        <div className={styles.aboutLink}>
          <Link href="/about">
            <a>Go to About page</a>
          </Link>
        </div>
        <div className={styles.colorPickerWrapper}>
          <h2>change light color</h2>
          <input
            className={styles.colorPicker}
            type="color"
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default Home
