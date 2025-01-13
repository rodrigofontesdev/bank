import styles from './styles.module.css'

type RootProps = {
  children: React.ReactNode
}

type ItemProps = {
  children: React.ReactNode
}

type LinkProps = {
  children: React.ReactNode
  isActive?: boolean
} & React.ComponentProps<'a'>

type IconProps = Omit<React.ComponentProps<'img'>, 'aria-hidden'>

function Root({ children }: RootProps) {
  return (
    <nav
      className={styles.mainMenu}
      aria-label="Menu"
    >
      <ul className={styles.navigation}>{children}</ul>
    </nav>
  )
}

function Item({ children }: ItemProps) {
  return <li className={styles.navItem}>{children}</li>
}

function Link({ children, isActive, ...props }: LinkProps) {
  return (
    <a
      className={styles.navLink}
      aria-current={isActive ? 'page' : 'false'}
      data-active={isActive}
      {...props}
    >
      {children}
    </a>
  )
}

function Icon({ width, height, ...props }: IconProps) {
  return (
    <img
      width={width ?? 20}
      height={height ?? 20}
      aria-hidden
      {...props}
    />
  )
}

Root.displayName = 'MainMenu.Root'
Item.displayName = 'MainMenu.Item'
Link.displayName = 'MainMenu.Link'
Icon.displayName = 'MainMenu.Icon'

export { Icon, Item, Link, Root }
