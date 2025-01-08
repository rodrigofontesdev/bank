import { Outlet } from 'react-router'

import styles from './styles.module.css'

import logoLightImage from '@/assets/logo-ligh.svg'
import signInImage from '@/assets/sign-in.webp'

export function AuthTemplate() {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.illustration}>
        <div className={styles.siteLogo}>
          <img
            src={logoLightImage}
            width={200}
            height={43}
            alt="MeuBanco"
          />
        </div>

        <div className={styles.figure}>
          <img
            src={signInImage}
            sizes="800px"
            alt="Uma mulher sorrindo e segurando o seu cartão de crédito"
          />
        </div>
      </div>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
