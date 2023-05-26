import styles from './Header.module.css'
// import LogoZuvia from '../../../public/images/zuviaLogo.svg'
import LogoZuviaDark from '../../../public/images/logoZuviaDark.png'

export function Header() {
  return (
    <header className={styles.header}>
        <a href="/">
          <img src={LogoZuviaDark} alt="Logotipo Zuvia"/>
        </a>
        <div className={styles.options}>
          <a href="https://zuvia.com.br/pay/" target='__blank'> Zuvia Pay </a>
          <a href="https://zuvia.com.br/" target='__blank'> Sobre </a>
        </div>
        <a href="https://app.zuviapay.com.br/" className={styles.buyCripto} target='__blank'> 
          Compre Cripto
        </a>
    </header>
  )
}