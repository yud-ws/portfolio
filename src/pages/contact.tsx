import Head from 'next/head'
import { FaEnvelope } from 'react-icons/fa'
import Title from '../components/Title'
import styles from '../styles/contact.module.scss'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>contact | yudai portfolio</title>
      </Head>
      <Title title="contact">
        <FaEnvelope size="3.5em" />
      </Title>
      <p className={styles.text}>
        何かあった場合は Twitter の DM からご連絡ください。
      </p>
      <div className={styles.wrapper}>
        <div className={styles.twitter}>
          <div className={styles.box1}>
            <a href="https://twitter.com/ganbaruOjisan_" target="blank">
              <img src="images/twittericon.png" />
              <span>twitter</span>
            </a>
          </div>
        </div>
        <div className={styles.github}>
          <div className={styles.box2}>
            <a href="https://github.com/yud-ws" target="blank">
              <img src="images/githubicon.png" />
              <span>github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
