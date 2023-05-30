import { NavLink } from 'react-router-dom'
import styles from './CoinCard.module.css'

interface CoinCardProps {
    code: string,
    name: string
    bid: number,
    pctChange: number,
    image: string,
}

export function CoinCard({ code, bid, pctChange, image, name}: CoinCardProps) {
  const formattedBid = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(bid)
    
  return (
    <NavLink to={`/cripto/${code}`} className={pctChange >= 0 ? styles.cardCrypto: styles.cardCryptoNegative}>
            <div className={styles.cardHeader}>
                <img src={image} />
                <span> {'>'} </span>
            </div>
            <div className={styles.cardCryptoName}>
                <h2>{code}</h2>
                <span>{name}</span>
                <h3>{formattedBid}</h3>
            </div>
            <div className={styles.cardCriptoMarket}>
                <span className={pctChange >= 0 ? styles.positivo : styles.negativo}>Variação: {pctChange}%</span>
            </div>
    </NavLink>
  )
}