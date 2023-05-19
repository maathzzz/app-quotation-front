import { NavLink } from 'react-router-dom'
import styles from './CoinCard.module.css'

interface CoinCardProps {
    code: string,
    bid: string,
    high: string,
    low: string,
    pctChange: number,
    image: string,
}

export function CoinCard({ code, bid, high, low, pctChange, image}: CoinCardProps) {
    
  return (
    <NavLink to={`/${code}`} className={pctChange >= 0 ? styles.cardCrypto: styles.cardCryptoNegative}>
            <div className={styles.cardHeader}>
                <img src={image} />
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
    </NavLink>
  )
}