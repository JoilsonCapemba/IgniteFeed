import styles from './Header.module.css'

export function Header(){
  return(
    <header className={styles.header}>
      <strong>Ignite <span className={styles.greenColor}>Feed</span></strong>
    </header>
  )
}