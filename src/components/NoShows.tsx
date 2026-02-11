import styles from './NoShows.module.css'

export default function NoShows() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">El costo real</span>
          <h2 className="section-title">El verdadero problema no es la agenda.<br />Son los plantones.</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>1️⃣</span>
            <p className={styles.cardLabel}>1 plantón</p>
            <p className={styles.cardValue}>= 1 hora perdida</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>📅</span>
            <p className={styles.cardLabel}>3 por semana</p>
            <p className={styles.cardValue}>= 12 horas al mes</p>
          </div>
          <div className={`${styles.card} ${styles.cardHighlight}`}>
            <span className={styles.cardIcon}>💸</span>
            <p className={styles.cardLabel}>12 × $30.000</p>
            <p className={styles.cardBig}>$360.000</p>
            <p className={styles.cardSub}>perdidos cada mes</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            NORA convierte las horas en <strong>compromiso real</strong>.
            <br />
            Cuando el paciente paga antes de la sesión, llega.
          </p>
          <a href="#cta" className="btn-primary">Reducir mis plantones →</a>
        </div>
      </div>
    </section>
  )
}
