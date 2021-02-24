import Link from 'next/link'
import { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import Background from './three/light'
import styles from './layout.module.scss'

const Layout: React.FC = ({ children }) => {
  const links = ['home', 'about', 'skill', 'contact']

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.navigation}>
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
        </header>
        {/* <ul className={styles.colorNav}>
          {colors.map((color) => {
            switch (color) {
              case '#0d0015':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton1}>aa</button>
                  </li>
                )
              case '#412e49':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton2}>aa</button>
                  </li>
                )
              case '#00552e':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton3}>aa</button>
                  </li>
                )
              case '#640125':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton4}>aa</button>
                  </li>
                )
              case '#0f2350':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton5}>aa</button>
                  </li>
                )
              case '#726250':
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton6}>aa</button>
                  </li>
                )
              default:
                return (
                  <li key={color}>
                    <button className={styles.colorNavButton1}>aa</button>
                  </li>
                )
            }
          })}
        </ul> */}
        <main>
          <div className={styles.page}>{children}</div>
        </main>
        <footer>
          <p className={styles.footerText}>
            Copyright©Yudai Shiraishi. All Rights Reserved.
          </p>
        </footer>
      </div>
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 100] }}>
          <Background />
        </Canvas>
      </div>
    </>
  )
}

export default Layout
