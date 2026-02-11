import styles from './WhatsAppSection.module.css'

const notifications = [
  {
    time: '10:00',
    title: 'Reserva confirmada ✅',
    body: 'Tu sesión con Camila R. el Vie 17 Ene a las 11:00 ha sido confirmada y pagada.',
  },
  {
    time: '09:00 — 1 día antes',
    title: 'Recordatorio de sesión 🔔',
    body: 'Hola Camila, te recordamos tu sesión mañana Vie 17 Ene a las 11:00 con Francisco Valdés.',
  },
  {
    time: '08:00 — día de la sesión',
    title: 'Tu sesión es hoy 📍',
    body: 'Camila, tu sesión con Francisco Valdés es hoy a las 11:00. ¡Te esperamos!',
  },
]

export default function WhatsAppSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className="section-label">Notificaciones por WhatsApp</span>
            <h2 className="section-title">
              Tus pacientes reciben todo por WhatsApp.<br />
              Tú no mandas ni un mensaje.
            </h2>
            <p className={styles.desc}>
              Confirmación de reserva, recordatorios antes de la sesión y links de reprogramación.
              Todo automático, directo al WhatsApp del paciente.
            </p>
            <ul className={styles.benefits}>
              <li>
                <span className={styles.benefitIcon}>✓</span>
                Confirmación inmediata al pagar
              </li>
              <li>
                <span className={styles.benefitIcon}>✓</span>
                Recordatorio 24 horas antes
              </li>
              <li>
                <span className={styles.benefitIcon}>✓</span>
                Recordatorio el mismo día
              </li>
              <li>
                <span className={styles.benefitIcon}>✓</span>
                Link de reprogramación si necesita cambiar
              </li>
            </ul>
            <p className={styles.kicker}>
              El paciente no olvida. Tú no persigues.
            </p>
          </div>

          <div className={styles.phone}>
            <div className={styles.phoneTop}>
              <div className={styles.phoneNotch} />
            </div>
            <div className={styles.phoneScreen}>
              <div className={styles.waHeader}>
                <span className={styles.waAvatar}>N</span>
                <div>
                  <p className={styles.waName}>NORA</p>
                  <p className={styles.waStatus}>en línea</p>
                </div>
              </div>
              <div className={styles.waChat}>
                {notifications.map((n, i) => (
                  <div key={i} className={styles.waBubble}>
                    <p className={styles.waBubbleTitle}>{n.title}</p>
                    <p className={styles.waBubbleBody}>{n.body}</p>
                    <span className={styles.waBubbleTime}>{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
