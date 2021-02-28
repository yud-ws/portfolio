import Link from 'next/link'
import { useState, Dispatch, SetStateAction } from 'react'
import styles from './header.module.scss'

const links = ['home', 'about', 'skill', 'works', 'contact']

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SpNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return <></>
  else
    return (
      <nav className={styles.spNavigation}>
        <ul>
          {links.map((text) => {
            return (
              <li key={text} onClick={() => setIsOpen(false)}>
                <Link href={text === 'home' ? '/' : '/' + text}>
                  <a>{text}</a>
                </Link>
              </li>
            )
          })}
          <li onClick={() => setIsOpen(false)}>
            <span>閉じる</span>
          </li>
        </ul>
      </nav>
    )
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.box1}>
        <Link href="/">
          <a>
            <img src="images/githubicon.png" />
          </a>
        </Link>
      </div>
      <nav className={styles.pcNavigation}>
        <ul>
          {links.map((text) => {
            return (
              <li key={text}>
                <Link href={text === 'home' ? '/' : '/' + text}>
                  <a>{text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <SpNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </div>
    </header>
  )
}

export default Header
