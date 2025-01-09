import styles from './styles.module.css'

type BoxProps = {
  children: React.ReactNode
}

export function Box({ children }: BoxProps) {
  return <div className={styles.box}>{children}</div>
}
