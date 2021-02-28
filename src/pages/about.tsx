import Head from 'next/head'
import { GiIdCard } from 'react-icons/gi'
import Title from '../components/Title'
import styles from '../styles/about.module.scss'

const About: React.FC = () => {
  const profileTexts = [
    '名前: Yudai Shiraishi',
    '出身: 福岡県',
    '学歴: 法政大学情報科学部(2019卒)',
    `活動: 大学時代の卒業研究では Three.js を用いた絵画のモデリングを行う。
    インターンシップで React を用いた web アプリ制作に携わった経験あり。
    卒業後はスーパーのお肉屋さんで約1年アルバイトし、現在は 客先常駐の SE として
    ローコード開発プラットフォームを用いた社内業務改善ツールの作成、 Python を用いた効率化ツール、 
    Android Studio + Kotlin を用いたモバイルアプリ開発に携わる。`,
    '趣味: ゲーム、散歩、音楽鑑賞、YouTube で猫・犬の動画を見ること',
  ]

  return (
    <>
      <Head>
        <title>about | yudai portfolio</title>
      </Head>
      <Title title="about">
        <GiIdCard size="3.5em" />
      </Title>
      <div className={styles.profileWrapper}>
        <div className={styles.imageWrapper}>
          <img src="images/twittericon.png" />
        </div>
        <div className={styles.textWrapper}>
          <ul>
            {profileTexts.map((text) => {
              return <li key={text}>{text}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
