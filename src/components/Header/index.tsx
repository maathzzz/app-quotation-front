import styles from './Header.module.css'
// import LogoZuvia from '../../../public/images/zuviaLogo.svg'
import LogoZuviaDark from '../../../public/images/logoZuviaDark.png'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={LogoZuviaDark} alt="Logotipo Zuvia"/>
        <div className={styles.options}>
          <a href="#"> Zuvia </a>
          <a href="https://zuvia.com.br/pay/"> ZuviaPay </a>
          <a href="#"> About Zuvia </a>
        </div>

            <a href="https://app.zuviapay.com.br/" className={styles.buyCripto} target='__blank'> 
              Compre Cripto
            </a>
    </header>
  )
}