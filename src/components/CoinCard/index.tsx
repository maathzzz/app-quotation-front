import styles from './CoinCard.module.css'

interface CoinCardProps {
    code: string,
    bid: string,
    high: string,
    low: string,
    pctChange: number,
}

export function CoinCard({ code, bid, high, low, pctChange}: CoinCardProps) {
  return (
    <div className={pctChange >= 0 ? styles.cardCrypto: styles.cardCryptoNegative}>
            <div className={styles.cardHeader}>
                <img src="#" />
                <span> {'>'} </span>
            </div>
            <div className={styles.cardCryptoName}>
                <h2>{code}</h2>
                <h3>{bid}</h3>
            </div>
            <div className={styles.cardCriptoMarket}>
                <p>High: {high}</p>
                <p>Low: {low}</p>
                <span className={pctChange >= 0 ? styles.positivo : styles.negativo}>Variação: {pctChange}%</span>
            </div>
        </div>
  )
}