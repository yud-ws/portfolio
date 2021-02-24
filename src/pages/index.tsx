import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  // eslint-disable-next-line quotes
  const [text, setText] = useState("Yudai Shiraishi's portfolio")
  return (
    <div className={styles.wrapper}>
      <h1>{text}</h1>
      <div className={styles.aboutLink}>
        <Link href="/about">
          <a>Go to About page</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
