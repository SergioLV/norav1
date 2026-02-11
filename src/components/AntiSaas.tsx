import styles from './AntiSaas.module.css'

const others = [
  'Te cobran todos los meses, aunque no los uses',
  'Si no pagas, no puedes acceder a tu información',
  'Planes con funciones que nunca vas a usar',
  'Contratos anuales para "mejor precio"',
  'Cobran más si creces',
]

const nora = [
  'Pagas solo cuando un paciente agenda y paga',
  'Tu información siempre es tuya',
  'Solo lo que necesitas: agenda, pagos, recordatorios',
  'Sin contratos, sin permanencia',
  'Si creces, ganas más — nosotros también',
]

export default function AntiSaas() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">¿Por qué somos distintos?</span>
          <h2 className="section-title">Otros cobran por existir.<br />NORA cobra por funcionar.</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <span className={styles.colLabel}>🚫 Otras plataformas de agenda</span>
            <ul className={styles.list}>
              {others.map((item, i) => (
                <li key={i} className={styles.itemBad}>
                  <span className={styles.x}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.col} ${styles.colGood}`}>
            <span className={styles.colLabel}>✅ NORA</span>
            <ul className={styles.list}>
              {nora.map((item, i) => (
                <li key={i} className={styles.itemGood}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
