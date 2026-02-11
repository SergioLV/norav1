import styles from './Problem.module.css'

const pains = [
  { icon: '🗓️', text: 'Coordinar horarios mensaje por mensaje' },
  { icon: '🏦', text: 'Pedir transferencia por WhatsApp' },
  { icon: '🔍', text: 'Revisar comprobantes uno por uno' },
  { icon: '🔄', text: 'Reagendamientos de último minuto' },
  { icon: '😬', text: 'La incomodidad de cobrar personalmente' },
]

export default function Problem() {
  return (
    <section id="problema" className={`section ${styles.problem}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.chat} aria-label="Conversación típica de WhatsApp">
            <div className={styles.bubbleLeft}>Hola, ¿tienes hora disponible? 🙏</div>
            <div className={styles.bubbleRight}>Sí, el viernes a las 11:00. ¿Te sirve?</div>
            <div className={styles.bubbleLeft}>Dale! Cómo te pago?</div>
            <div className={styles.bubbleRight}>Transferencia al Banco Estado, te mando los datos...</div>
            <div className={styles.bubbleLeft}>Listo, transferí!</div>
            <div className={styles.bubbleRight}>Mmm no me aparece aún... 🔍</div>
            <div className={styles.bubbleLeft} style={{ opacity: 0.45, fontStyle: 'italic' }}>
              Viernes 10:45 — "No voy a poder ir 😅 ¿la otra semana?"
            </div>
          </div>

          <div>
            <span className="section-label">El problema real</span>
            <h2 className="section-title">Tu consulta no funciona por agenda.<br />Funciona por conversaciones.</h2>
            <ul className={styles.painList}>
              {pains.map((p, i) => (
                <li key={i} className={styles.painItem}>
                  <span className={styles.painIcon}>{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <p className={styles.kicker}>
              Mientras el pago dependa de una conversación, la hora no está confirmada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
