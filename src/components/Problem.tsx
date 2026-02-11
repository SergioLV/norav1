import styles from './Problem.module.css'

const pains = [
  { icon: '😤', text: '"Se me olvidó el comprobante, te lo mando después"' },
  { icon: '🙈', text: 'Incomodidad al pedir el pago por WhatsApp' },
  { icon: '👻', text: 'Pacientes que agendan y simplemente no llegan' },
  { icon: '📱', text: 'Interrupciones constantes coordinando horarios' },
  { icon: '🏦', text: 'Verificar transferencias una por una' },
  { icon: '💸', text: 'Suscripciones mensuales con ingresos impredecibles' },
]

export default function Problem() {
  return (
    <section id="problema" className={`section ${styles.problem}`}>
      <div className="container">
        <span className="section-label">El problema real</span>
        <h2 className="section-title">El problema no es la agenda.<br />Son los plantones y la incomodidad de cobrar.</h2>

        <div className={styles.grid}>
          <div className={styles.chat} aria-label="Conversaciones típicas de WhatsApp">
            <div className={styles.bubbleLeft}>Hola, ¿tienes hora disponible? 🙏</div>
            <div className={styles.bubbleRight}>Sí, el viernes a las 11:00. ¿Te sirve?</div>
            <div className={styles.bubbleLeft}>Dale! Cómo te pago?</div>
            <div className={styles.bubbleRight}>Transferencia al Banco Estado, te mando los datos...</div>
            <div className={styles.bubbleLeft}>Listo, transferí! Te mando el comprobante</div>
            <div className={styles.bubbleRight}>Mmm no me aparece aún... 🔍</div>
            <div className={styles.bubbleLeft} style={{ opacity: 0.45, fontStyle: 'italic' }}>
              Viernes 10:45 — "Hola, no voy a poder ir 😅 ¿podemos para la otra semana?"
            </div>
          </div>

          <div>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Psicólogos, nutricionistas, kinesiólogos y terapeutas pierden horas e ingresos
              cada semana. No por falta de pacientes, sino por un flujo que depende de la buena voluntad.
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
