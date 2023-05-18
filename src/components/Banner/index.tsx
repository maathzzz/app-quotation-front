import styles from './Banner.module.css'
import wallet from '../../../public/images/zuvia-wallet.png'

export function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.heading}>
          <span> Cotação em tempo real</span>
          <div className={styles.title}>
            <h1 className={styles.zuviah1}>Zuvia </h1>
            <h1 className={styles.cotacaoh1}> Cotação </h1>
          </div>
          <div>
            <div className={styles.slogan1}>
                <p className={styles.acompanheMercado}>  Acompanhe o mercado: </p> 
                <p>Esteja atualizado sobre as últimas variações </p>
            </div>
            <p>e tendências do mercado de criptomoedas.</p>
          </div>
        </div>
        <img src={wallet} />
    </div>
  )
}