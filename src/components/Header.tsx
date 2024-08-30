import styles from './Header.module.css'
import rocketImg from '../assets/rocket.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.boxHeader}>
        <img src={rocketImg} alt="Foguete dando partida" />
        <h1 className={styles.logoText}>to<span>do</span></h1>
      </div>
    </header>
  )
}
