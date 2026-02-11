import styles from './Solution.module.css'

const patientSteps = [
  'Abre tu link de agendamiento',
  'Selecciona servicio y horario',
  'Paga el total al agendar',
  'Recibe confirmación inmediata',
]

const proBenefits = [
  'Tú no cobras — el sistema cobra por ti',
  'Sin verificación manual de pagos',
  'Recordatorios automáticos por WhatsApp',
  'Menos cancelaciones, más ingresos',
  'Pagos en tu cuenta al día siguiente',
]

export default function Solution() {
  return (
    <section id="solucion" className="section">
      <div className="container">
        <span className="section-label">La solución</span>
        <h2 className="section-title">NORA no es un calendario.<br />Es tu escudo contra plantones y cobros incómodos.</h2>
        <p className="section-subtitle">
          Configura tus horas, comparte tu link y deja que NORA se encargue del resto.
          El paciente paga antes. Tú atiendes tranquilo.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Para el paciente</span>
            <h3 className={styles.cardTitle}>Reservar es tan fácil como pedir un Uber</h3>
            <ol className={styles.stepList}>
              {patientSteps.map((s, i) => (
                <li key={i} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.card}>
            <span className={styles.cardLabel}>Para el profesional</span>
            <h3 className={styles.cardTitle}>Tu consulta funciona mientras tú atiendes</h3>
            <ul className={styles.checkList}>
              {proBenefits.map((b, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
