import styles from './title.module.scss'

type Props = {
  title: string
}

const Title: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <div className={styles.iconWrapper}>{children}</div>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title
