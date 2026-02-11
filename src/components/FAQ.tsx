import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '¿Cuánto cuesta usar NORA?',
    a: 'No hay suscripción ni mensualidad. Solo pagas $1.000 por cada reserva pagada que recibas. Si no agendas, no pagas nada.',
  },
  {
    q: '¿Cómo recibo el dinero de mis pacientes?',
    a: 'El pago del paciente se procesa a través de Payku y se deposita en tu cuenta bancaria al día hábil siguiente. Tú recibes el monto de la sesión menos la comisión del medio de pago.',
  },
  {
    q: '¿Qué pasa si un paciente quiere cancelar o reagendar?',
    a: 'El paciente recibe un link de reprogramación en sus recordatorios por WhatsApp. Tú defines las reglas de cancelación y reagendamiento según tu criterio.',
  },
  {
    q: '¿Mis pacientes tienen que instalar algo?',
    a: 'No. Todo funciona desde el navegador y WhatsApp. El paciente entra a tu link, elige un horario, paga y recibe confirmación y recordatorios automáticos por WhatsApp.',
  },
  {
    q: '¿Necesito conocimientos técnicos para configurar mi agenda?',
    a: 'Para nada. Configuras tus horarios, servicios y precios en menos de 3 minutos. Después solo compartes tu link.',
  },
  {
    q: '¿El paciente paga el total de la sesión al agendar?',
    a: 'Sí, siempre. El pago completo al momento de agendar es lo que confirma la hora y reduce las inasistencias.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="section-title">¿Tienes dudas? Es normal.</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(i)}>
                {faq.q}
                <span className={`${styles.icon} ${openIndex === i ? styles.open : ''}`}>+</span>
              </button>
              <div className={`${styles.answer} ${openIndex === i ? styles.open : ''}`}>
                <p className={styles.answerText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
