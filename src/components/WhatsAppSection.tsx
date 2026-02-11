import styles from './WhatsAppSection.module.css'

const patientMsgs = [
  {
    time: '10:00',
    title: 'Reserva confirmada ✅',
    body: 'Tu sesión con Francisco Valdés el Vie 17 Ene a las 11:00 ha sido confirmada.',
  },
  {
    time: '09:00 — 1 día antes',
    title: 'Recordatorio 🔔',
    body: 'Hola Camila, te recordamos tu sesión mañana a las 11:00.',
  },
  {
    time: '08:00 — día de la sesión',
    title: 'Tu sesión es hoy 📍',
    body: 'Tu sesión es hoy a las 11:00. ¡Te esperamos!',
  },
]

const proMsgs = [
  {
    time: '10:00',
    title: 'Nueva reserva pagada 💰',
    body: 'Camila R. reservó Sesión individual el Vie 17 Ene a las 11:00. Pago confirmado.',
  },
  {
    time: '08:00 — día de la sesión',
    title: 'Agenda del día 📋',
    body: 'Hoy tienes 4 sesiones. Próxima: Camila R. a las 11:00.',
  },
  {
    time: '18:00',
    title: 'Transferencia enviada ✅',
    body: 'Se transfirieron $136.000 a tu cuenta. Detalle disponible en tu panel.',
  },
]

function Phone({ label, messages }: { label: string; messages: typeof patientMsgs }) {
  return (
    <div className={styles.phoneWrap}>
      <span className={styles.phoneLabel}>{label}</span>
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
            {messages.map((n, i) => (
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
  )
}

export default function WhatsAppSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Resultado operativo</span>
          <h2 className="section-title">
            Ambos reciben todo por WhatsApp.<br />
            Nadie persigue a nadie.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Confirmaciones, recordatorios y resúmenes de pago. Automáticos para el paciente y para ti.
          </p>
        </div>

        <div className={styles.phones}>
          <Phone label="👤 Lo que recibe el paciente" messages={patientMsgs} />
          <Phone label="🩺 Lo que recibes tú" messages={proMsgs} />
        </div>

        <p className={styles.kicker}>
          El paciente no olvida. Tú no persigues. El sistema se encarga.
        </p>
      </div>
    </section>
  )
}
