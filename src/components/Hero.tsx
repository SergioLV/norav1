import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className="container">
        <h1 className={styles.title}>
          Convierte mensajes de WhatsApp en{' '}
          <span className={styles.highlight}>horas confirmadas y pagadas</span>
        </h1>
        <p className={styles.subtitle}>
          Configura tus servicios y horarios, comparte tu link de agendamiento
          y deja que tus pacientes reserven y paguen el total al agendar. Sin suscripción.
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
          💰 <span>$1.000 CLP por reserva pagada</span> — solo pagas cuando ganas
        </div>
      </div>
    </section>
  )
}
