import styles from './Features.module.css'

const features = [
  {
    icon: '📅',
    title: 'Agenda inteligente',
    items: [
      'Disponibilidad semanal configurable',
      'Bloques de descanso y buffers',
      'Múltiples servicios y duraciones',
      'Sesiones online o presenciales',
    ],
  },
  {
    icon: '💳',
    title: 'Pagos integrados',
    items: [
      'Pago total obligatorio al reservar',
      'Procesados mediante Payku',
      'Confirmación automática tras el pago',
      'Sin transferencias manuales',
    ],
  },
  {
    icon: '🔔',
    title: 'Comunicación automática',
    items: [
      'Confirmaciones instantáneas',
      'Recordatorios automáticos por WhatsApp',
      'Links de reprogramación',
      'Reglas de cancelación automáticas',
    ],
  },
  {
    icon: '📊',
    title: 'Panel de control',
    items: [
      'Próximas citas de un vistazo',
      'Historial de pacientes',
      'Ingresos y transferencias',
      'Todo en un solo lugar',
    ],
  },
]

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Funcionalidades</span>
          <h2 className="section-title">Todo lo que necesitas. Nada que no.</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <ul className={styles.list}>
                {f.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
