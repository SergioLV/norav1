import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>
          Deja de perseguir pacientes.<br />
          Deja que el sistema trabaje por ti.
        </h2>
        <p className={styles.subtitle}>
          Configura tus horas, comparte tu link y empieza a recibir reservas pagadas.
          Sin costo mensual. Si no atiendes, no pagas.
        </p>
        <a href="#" className={styles.btn}>Crear mi link de agendamiento →</a>
        <p className={styles.note}>Solo $1.000 CLP por reserva pagada. Nada más.</p>
      </div>
    </section>
  )
}
