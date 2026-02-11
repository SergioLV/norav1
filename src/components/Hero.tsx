import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className="container">
        <h1 className={styles.title}>
          Deja de perseguir pacientes{' '}
          <span className={styles.highlight}>para confirmar la hora</span>
        </h1>
        <p className={styles.subtitle}>
          NORA confirma la sesión con pago previo y recordatorios automáticos por WhatsApp.
          Tú atiendes. NORA coordina.
        </p>
        <div className={styles.actions}>
          <a href="#cta" className="btn-primary">Crear mi link de agendamiento →</a>
          <a href="#como-funciona" className="btn-secondary">Ver cómo funciona</a>
        </div>

        <div className={styles.linkPreview}>
          <span className={styles.linkIcon}>🔗</span>
          <span className={styles.linkUrl}>nora.cl/psicologia/<strong>tu-nombre</strong>/agendamiento</span>
        </div>

        <div className={styles.badge}>
          💰 <span>$1.000 CLP por reserva pagada</span> — si no atiendes, no pagas nada
        </div>
      </div>
    </section>
  )
}
