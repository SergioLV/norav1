import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section id="precio" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Precio</span>
          <h2 className="section-title">Solo pagas cuando ganas</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sin suscripción. Sin costo de implementación. Sin riesgo.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.priceBlock}>
            <span className={styles.currency}>CLP</span>
            <span className={styles.amount}>$1.000</span>
            <span className={styles.per}>por reserva pagada</span>
          </div>

          <div className={styles.divider} />

          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.no}>✗</span> Sin suscripción mensual
            </li>
            <li className={styles.item}>
              <span className={styles.no}>✗</span> Sin costo de implementación
            </li>
            <li className={styles.item}>
              <span className={styles.no}>✗</span> Sin riesgo para ti
            </li>
            <li className={styles.item}>
              <span className={styles.yes}>✓</span> La comisión se descuenta automáticamente
            </li>
            <li className={styles.item}>
              <span className={styles.yes}>✓</span> Si no tienes pacientes, no pagas nada
            </li>
            <li className={styles.item}>
              <span className={styles.yes}>✓</span> Pagos transferidos al siguiente día hábil
            </li>
          </ul>

          <a href="#cta" className="btn-primary" style={{ marginTop: '1.5rem' }}>
            Crear mi link de agendamiento →
          </a>

          <p className={styles.zeroline}>
            Si un mes no atiendes, ese mes pagas $0.
          </p>
        </div>
      </div>
    </section>
  )
}
