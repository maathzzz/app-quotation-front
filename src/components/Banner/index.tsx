import styles from './Banner.module.css'

export function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.heading}>
          <span> Cotação em tempo real</span>
          <div className={styles.title}>
            <h1 className={styles.zuviah1}>Zuvia </h1>
            <h1 className={styles.cotacaoh1}> Cotação </h1>
          </div>
        </div>
    </div>
  )
}