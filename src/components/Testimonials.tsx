import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Antes perdía 2 horas al día coordinando citas por WhatsApp. Ahora mis pacientes reservan solos y llegan pagados.',
    name: 'Camila R.',
    role: 'Psicóloga clínica',
  },
  {
    quote: 'Mis inasistencias bajaron un 70% desde que los pacientes pagan al agendar. Debí haberlo hecho antes.',
    name: 'Tomás M.',
    role: 'Kinesiólogo',
  },
  {
    quote: 'Lo mejor es que no pago suscripción. Con ingresos variables, eso era lo que siempre me frenaba.',
    name: 'Valentina S.',
    role: 'Nutricionista',
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Profesionales que ya usan NORA</span>
          <h2 className="section-title">Menos WhatsApp, más consultas</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
