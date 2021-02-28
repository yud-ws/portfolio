import Head from 'next/head'
import { GiSkills } from 'react-icons/gi'
import Title from '../components/Title'
import Card from '../components/Card'
import styles from '../styles/skill.module.scss'

const Skill: React.FC = () => {
  const skills = [
    {
      title: 'プログラミング言語',
      desc: [
        {
          skillName: 'JavaScript',
          year: 3,
          level: 4,
        },
        {
          skillName: 'TypeScript',
          year: 1,
          level: 3.5,
        },
        {
          skillName: 'Python',
          year: 3,
          level: 4,
        },
        {
          skillName: 'Kotlin',
          year: 0.5,
          level: 2.5,
        },
      ],
    },
    {
      title: 'ライブラリ・フレームワーク',
      desc: [
        {
          skillName: 'React.js',
          year: 1,
          level: 3.5,
        },
        {
          skillName: 'Next.js',
          year: 1,
          level: 3.5,
        },
        {
          skillName: 'Vue.js',
          year: 0.5,
          level: 3,
        },
        {
          skillName: 'Three.js',
          year: 1,
          level: 3,
        },
        {
          skillName: 'OpenPyXL',
          year: 1,
          level: 4,
        },
      ],
    },
  ]
  return (
    <>
      <Head>
        <title>skill | yudai portfolio</title>
      </Head>
      <Title title="skill">
        <GiSkills size="3.5em" />
      </Title>
      <div className={styles.cardWrapper}>
        {skills.map((skill) => {
          return (
            <Card title={skill.title} desc={skill.desc} key={skill.title} />
          )
        })}
      </div>
    </>
  )
}

export default Skill
