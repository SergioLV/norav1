import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <p className={styles.for}>
          Si atiendes pacientes por tu cuenta y coordinas todo por WhatsApp, esto es para ti
        </p>
        <h1 className={styles.title}>
          Tus pacientes reservan, pagan y reciben recordatorios.{' '}
          <span className={styles.highlight}>Tú solo atiendes.</span>
        </h1>
        <p className={styles.subtitle}>
          NORA reemplaza la coordinación por WhatsApp con un link de agendamiento donde
          tu paciente elige horario, paga al momento y recibe confirmación automática.
          Menos plantones, menos admin, más consultas.
        </p>
        <div className={styles.actions}>
          <a href="#cta" className="btn-primary">Crear mi link de agendamiento →</a>
        </div>
        <p className={styles.micro}>
          Se configura en menos de 3 minutos. Sin suscripción. Pagas solo si agendas.
        </p>

        <div className={styles.trust}>
          <span className={styles.trustItem}>✓ Agendamiento online</span>
          <span className={styles.trustDot}>·</span>
          <span className={styles.trustItem}>✓ Pago integrado</span>
          <span className={styles.trustDot}>·</span>
          <span className={styles.trustItem}>✓ Recordatorios por WhatsApp</span>
          <span className={styles.trustDot}>·</span>
          <span className={styles.trustItem}>✓ Transferencia automática</span>
        </div>
      </div>
    </section>
  )
}
