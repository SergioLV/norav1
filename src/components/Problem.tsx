import styles from './Problem.module.css'

const pains = [
  { icon: '😤', text: 'Pacientes que agendan y no llegan' },
  { icon: '📱', text: 'Interrupciones constantes por mensajes de WhatsApp' },
  { icon: '🏦', text: 'Verificar transferencias manualmente' },
  { icon: '🗓️', text: 'Coordinar horarios mensaje por mensaje' },
  { icon: '😬', text: 'Incomodidad al pedir abonos por chat' },
  { icon: '💸', text: 'Suscripciones mensuales con ingresos variables' },
]

export default function Problem() {
  return (
    <section id="problema" className={`section ${styles.problem}`}>
      <div className="container">
        <span className="section-label">El problema</span>
        <h2 className="section-title">Tu consulta funciona por WhatsApp.<br />Y eso tiene un costo.</h2>

        <div className={styles.grid}>
          <div className={styles.chat} aria-label="Ejemplo de conversación típica">
            <div className={styles.bubbleLeft}>Hola, ¿tienes hora disponible? 🙏</div>
            <div className={styles.bubbleRight}>Hola! Sí, tengo el jueves a las 16:00 o viernes a las 11:00</div>
            <div className={styles.bubbleLeft}>El viernes me sirve! Cómo te pago?</div>
            <div className={styles.bubbleRight}>Transferencia al Banco Estado, te mando los datos...</div>
            <div className={styles.bubbleLeft}>Listo, transferí! Te mando el comprobante</div>
            <div className={styles.bubbleRight}>Déjame revisar... 🔍</div>
            <div className={styles.bubbleLeft} style={{ opacity: 0.5, fontStyle: 'italic' }}>
              Viernes 10:45 — "Hola, no voy a poder ir, podemos para la otra semana?"
            </div>
          </div>

          <div>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Psicólogos, nutricionistas, kinesiólogos y terapeutas pierden horas cada semana
              coordinando citas, verificando pagos y lidiando con cancelaciones de último minuto.
            </p>
            <ul className={styles.painList}>
              {pains.map((p, i) => (
                <li key={i} className={styles.painItem}>
                  <span className={styles.painIcon}>{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
