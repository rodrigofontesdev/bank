import styles from './styles.module.css'

type RootProps = {
  children: React.ReactNode
}

type LabelProps = {
  children: React.ReactNode
} & React.ComponentProps<'label'>

type InputProps = {
  inputId: string
} & Omit<React.ComponentProps<'input'>, 'id' | 'name'>

function Root({ children }: RootProps) {
  return <div className={styles.inputGroup}>{children}</div>
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className={styles.inputLabel}
      {...props}
    >
      {children}
    </label>
  )
}

function Input({ inputId, ...props }: InputProps) {
  return (
    <input
      id={inputId}
      name={inputId}
      className={styles.inputControl}
      {...props}
    />
  )
}

Root.displayName = 'InputGroup.Root'
Label.displayName = 'InputGroup.Label'
Input.displayName = 'InputGroup.Input'

export { Root, Label, Input }
