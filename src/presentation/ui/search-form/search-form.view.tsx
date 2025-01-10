import iconSearch from '@presentation/assets/icon-search.svg'

import styles from './styles.module.css'

export function SearchForm() {
  return (
    <form>
      <div className={styles.inputGroup}>
        <span className={styles.inputPrepend}>
          <img
            src={iconSearch}
            width={20}
            height={20}
            alt=""
            aria-hidden
          />
        </span>

        <input
          type="search"
          placeholder="Buscar"
          id="search"
          name="search"
          aria-label="Buscar"
          className={styles.inputControl}
        />
      </div>
    </form>
  )
}
