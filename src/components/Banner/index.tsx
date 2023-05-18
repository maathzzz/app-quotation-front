import styles from './Banner.module.css'
import wallet from '../../../public/images/zuvia-wallet.png'

export function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span> Cotação em tempo real</span>
            <div className={styles.title}>
              <h1 className={styles.zuviah1}>Zuvia </h1>
              <h1 className={styles.cotacaoh1}> Cotação </h1>
            </div>
            <div>
              <div className={styles.slogan1}>
                  <p className={styles.p1}>  Acompanhe o mercado: </p> 
                  <p className={styles.p2}>Esteja atualizado sobre as últimas variações e </p>
              </div>
              <p className={styles.p3}>tendências do mercado de criptomoedas.</p>
            </div>
          </div>
          <img src={wallet} className={styles.wallet}/>
      </div>
    </div>
  )
}