import { useInView } from '../hooks/useInView'
import styles from './Problem.module.css'

const pains = [
  { icon: '🗓️', text: 'Coordinar horarios mensaje por mensaje' },
  { icon: '🏦', text: 'Pedir transferencia por WhatsApp' },
  { icon: '🔍', text: 'Revisar comprobantes uno por uno' },
  { icon: '🔄', text: 'Reagendamientos de último minuto' },
  { icon: '😬', text: 'La incomodidad de cobrar personalmente' },
]

const bubbles = [
  { side: 'left', text: 'Hola, ¿tienes hora disponible? 🙏' },
  { side: 'right', text: 'Sí, el viernes a las 11:00. ¿Te sirve?' },
  { side: 'left', text: 'Dale! Cómo te pago?' },
  { side: 'right', text: 'Transferencia al Banco Estado, te mando los datos...' },
  { side: 'left', text: 'Listo, transferí!' },
  { side: 'right', text: 'Mmm no me aparece aún... 🔍' },
  { side: 'left', text: 'Viernes 10:45 — "No voy a poder ir 😅 ¿la otra semana?"', ghost: true },
]

export default function Problem() {
  const { ref, visible } = useInView(0.15)
  const v = visible ? styles.animVisible : ''

  return (
    <section id="problema" className={`section ${styles.problem}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.chat} ref={ref} aria-label="Conversación típica de WhatsApp">
            {bubbles.map((b, i) => (
              <div
                key={i}
                className={`${b.side === 'left' ? styles.bubbleLeft : styles.bubbleRight} ${styles.animBubble} ${v}`}
                style={{
                  transitionDelay: visible ? `${i * 0.35}s` : '0s',
                  ...(b.ghost ? { opacity: visible ? 0.45 : 0, fontStyle: 'italic' } : {}),
                }}
              >
                {b.text}
              </div>
            ))}
          </div>

          <div>
            <span className="section-label">El problema real</span>
            <h2 className="section-title">Atiendes 8 pacientes al día.<br />Pero coordinas como si fueran 80.</h2>
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
