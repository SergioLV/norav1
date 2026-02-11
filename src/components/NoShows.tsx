import styles from './NoShows.module.css'

export default function NoShows() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.left}>
          <span className="section-label" style={{ color: '#E4B4A6' }}>El costo real</span>
          <h2 className={styles.title}>El problema no es la agenda. Son los plantones.</h2>
          <p className={styles.text}>
            Un paciente no llega → <span className={styles.hl}>$30.000 perdidos</span>.
            Pasa 3 veces por semana → <span className={styles.hl}>12 horas al mes</span> que no vuelven.
          </p>
          <p className={styles.resolve}>
            Cuando el paciente paga antes y recibe recordatorios por WhatsApp, <span className={styles.resolveWord}>llega.</span>
          </p>
          <a href="#cta" className="btn-primary" style={{ marginTop: '0.5rem' }}>Reducir mis plantones →</a>
        </div>

        <div className={styles.right}>
          <p className={styles.rightLabel}>Cada mes pierdes</p>
          <p className={styles.rightNumber}>$360.000</p>
          <p className={styles.rightSub}>$4.320.000 al año</p>
        </div>
      </div>
    </section>
  )
}
