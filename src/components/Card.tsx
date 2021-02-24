import Rating from 'react-rating'
import styles from './card.module.scss'

type Props = {
  title: string
  desc: {
    skillName: string
    year: number
    level: number
  }[]
}

const Card: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.skillDesc}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">レベル</th>
            </tr>
          </thead>
          <tbody>
            {desc.map((skill) => {
              return (
                <tr key={skill.skillName}>
                  <td>{skill.skillName}</td>
                  <td>{skill.year} 年</td>
                  <td>
                    <Rating initialRating={skill.level} readonly />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Card
