import Head from 'next/head'
import { IoMdList } from 'react-icons/io'
import Title from '../components/Title'
import styles from '../styles/works.module.scss'

type Props = {
  image: string
  title: string
  text: string
  skill: string
  link: string
}

const Work: React.FC<Props> = ({ image, title, text, skill, link }) => {
  return (
    <div className={styles.work}>
      <img src={image} />
      <div className={styles.information}>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{skill}</p>
        <a href={link}>github</a>
      </div>
    </div>
  )
}

const Works: React.FC = () => {
  const works = [
    {
      image: 'images/portfolio.png',
      title: 'ポートフォリオ',
      text: 'ポートフォリオです(このサイト)。Next.js を用いて開発しています。',
      skill: 'Next.js/react-three-fiber/Recoil',
      link: 'https://github.com/yud-ws/portfolio',
    },
  ]
  return (
    <>
      <Head>
        <title>works | yudai portfolio</title>
      </Head>
      <Title title="works">
        <IoMdList size="3.5em" />
      </Title>
      <div className={styles.worksWrapper}>
        {works.map(({ image, title, text, skill, link }) => {
          return (
            <Work
              key={image}
              image={image}
              title={title}
              text={text}
              skill={skill}
              link={link}
            />
          )
        })}
      </div>
    </>
  )
}

export default Works
