import styles from './Header.module.css'
import LogoZuvia from '../../../public/images/zuviaLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={LogoZuvia} alt="Logotipo Zuvia"/>
        <div className={styles.options}>
          <a href="#"> Zuvia </a>
          <a href="#"> ZuviaPay </a>
          <a href="#"> About Zuvia </a>
        </div>

            <button className={styles.buyCripto}> 
              Compre Cripto
            </button>
    </header>
  )
}