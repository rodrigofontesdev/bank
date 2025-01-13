import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
  appearance?: 'primary' | 'secondary'
  fill?: boolean
} & React.ComponentProps<'button'>

export function Button({ children, appearance = 'primary', fill, ...props }: ButtonProps) {
  const appearanceClass = appearance === 'primary' ? styles.primary : styles.secondary
  const stretchClass = fill ? styles.stretch : ''

  return (
    <button
      className={`${styles.button} ${appearanceClass} ${stretchClass}`}
      {...props}
    >
      {children}
    </button>
  )
}
