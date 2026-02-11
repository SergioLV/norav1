import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Deja de perseguir pacientes{' '}
          <span className={styles.highlight}>para confirmar la hora</span>
        </h1>
        <p className={styles.subtitle}>
          NORA confirma la sesión con pago previo y recordatorios por WhatsApp.
          Tú atiendes. NORA coordina.
        </p>
        <div className={styles.actions}>
          <a href="#cta" className="btn-primary">Crear mi link de agendamiento →</a>
        </div>
        <p className={styles.micro}>
          Crear tu agenda toma menos de 3 minutos. Pagas solo si agendas.
        </p>
      </div>
    </section>
  )
}
