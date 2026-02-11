import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>
          Deja de coordinar horas.<br />
          Empieza a atender.
        </h2>
        <p className={styles.subtitle}>
          Tu agenda, tu link, tus pagos confirmados.
        </p>
        <a href="#" className={styles.btn}>Crear mi link de agendamiento →</a>
        <p className={styles.note}>Configuración inicial: menos de 3 minutos.</p>
      </div>
    </section>
  )
}
