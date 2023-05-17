import styles from './Banner.module.css'

export function Banner() {
  return (
    <div className={styles.banner}>
        <div>
            <h1>Zuvia Cotação</h1>
            <span> Cotação em tempo real</span>
        </div>
    </div>
  )
}