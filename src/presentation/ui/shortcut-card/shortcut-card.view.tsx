import { Box } from '../box'

import styles from './styles.module.css'

type ShortcutCardProps = {
  title: string
  amount: string
  tag?: string
  appearance?: 'default' | 'tagged'
}

export function ShortcutCard({ title, amount, tag, appearance }: ShortcutCardProps) {
  const appearanceClass = appearance === 'tagged' ? styles.tagged : ''

  return (
    <Box>
      <article className={styles.card}>
        <header className={styles.subject}>
          <h2>{title}</h2>
          <p>{amount}</p>
        </header>

        {tag && <p className={`${styles.tag} ${appearanceClass}`}>{tag}</p>}
      </article>
    </Box>
  )
}
