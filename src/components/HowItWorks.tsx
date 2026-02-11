import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Configura tus horas',
    desc: 'Define tus servicios, horarios disponibles y precios. En minutos tu agenda está lista.',
  },
  {
    num: '02',
    title: 'Comparte tu link',
    desc: 'Pon tu link de agendamiento en tu bio de Instagram, WhatsApp o donde quieras.',
  },
  {
    num: '03',
    title: 'El paciente reserva y paga',
    desc: 'Entra a tu link, elige servicio y horario, paga el total. Confirmación inmediata.',
  },
  {
    num: '04',
    title: 'Tú recibes tu pago',
    desc: 'Los fondos se transfieren a tu cuenta el siguiente día hábil. Sin perseguir pagos.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Cómo funciona</span>
          <h2 className="section-title">De WhatsApp a pagos automáticos en 4 pasos</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.linkDemo}>
          <p className={styles.linkDemoLabel}>Así se ve tu link personal</p>
          <div className={styles.linkBar}>
            <span className={styles.linkDot} />
            <span className={styles.linkDot} />
            <span className={styles.linkDot} />
            <span className={styles.linkText}>
              nora.cl/nutricion/<strong>camila-reyes</strong>/agendamiento
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
