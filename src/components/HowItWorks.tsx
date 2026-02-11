import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './HowItWorks.module.css'

function CountUp({ target }: { target: number }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    const duration = 1200
    const steps = 30
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setVal(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <>${'$' + val.toLocaleString('es-CL')}</>
}

const steps = [
  {
    num: '01',
    title: 'Configura tus horas',
    desc: 'Define tus servicios, horarios disponibles y precios. En minutos tu agenda está lista para recibir pacientes.',
    mock: 'config',
  },
  {
    num: '02',
    title: 'Comparte tu link',
    desc: 'Pon tu link de agendamiento en tu bio de Instagram, respuesta rápida de WhatsApp o donde quieras.',
    mock: 'share',
  },
  {
    num: '03',
    title: 'Tu paciente reserva y paga',
    desc: 'Entra a tu link, elige servicio y horario, paga el total. Recibe confirmación inmediata por WhatsApp.',
    mock: 'book',
  },
  {
    num: '04',
    title: 'Tú recibes tu pago',
    desc: 'Los fondos se transfieren a tu cuenta el siguiente día hábil. Sin perseguir pagos ni verificar transferencias.',
    mock: 'pay',
  },
]

function ConfigMock() {
  const { ref, visible } = useInView(0.3)
  const v = visible ? styles.animVisible : ''

  return (
    <div className={styles.mockCard} ref={ref}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Mi agenda</span>
      </div>
      <div className={styles.mockBody}>
        <div className={`${styles.serviceRow} ${styles.animRow1} ${v}`}>
          <span className={styles.serviceIcon}>🧠</span>
          <div>
            <p className={styles.serviceName}>Sesión de psicología</p>
            <p className={styles.serviceMeta}>50 min · $35.000</p>
          </div>
          <span className={`${styles.serviceToggle} ${styles.animToggle1} ${v}`} />
        </div>
        <div className={`${styles.serviceRow} ${styles.animRow2} ${v}`}>
          <span className={styles.serviceIcon}>🥗</span>
          <div>
            <p className={styles.serviceName}>Consulta nutricional</p>
            <p className={styles.serviceMeta}>40 min · $25.000</p>
          </div>
          <span className={`${styles.serviceToggle} ${styles.animToggle2} ${v}`} />
        </div>
        <div className={`${styles.timeGrid} ${styles.animGrid} ${v}`}>
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map((d, i) => (
            <div key={d} className={styles.timeCol} style={{ transitionDelay: visible ? `${0.8 + i * 0.1}s` : '0s' }}>
              <span className={styles.timeDay}>{d}</span>
              <span className={styles.timeSlot}>9:00–13:00</span>
              <span className={styles.timeSlot}>15:00–19:00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShareMock() {
  const { ref, visible } = useInView(0.3)
  const v = visible ? styles.animVisible : ''

  return (
    <div className={styles.mockCard} ref={ref}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Compartir</span>
      </div>
      <div className={styles.mockBody}>
        <div className={`${styles.linkBox} ${styles.animLinkBox} ${v}`}>
          <span className={styles.linkIcon}>🔗</span>
          <span className={styles.linkText}>nora.cl/psicologia/<strong>francisco-valdes</strong>/agendamiento</span>
          <span className={`${styles.copyBadge} ${styles.animCopy} ${v}`}>Copiado ✓</span>
          <span className={`${styles.cursor} ${styles.animCursor} ${v}`}>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M1 1l5.5 17 2.5-7 7-2.5L1 1z" fill="var(--text)" stroke="var(--white)" strokeWidth="1.5"/></svg>
          </span>
        </div>
        <div className={styles.shareButtons}>
          {[
            { icon: '📸', label: 'Bio de Instagram', type: 'ig' },
            { icon: '💬', label: 'Respuesta rápida WhatsApp', type: 'wa' },
            { icon: '🌐', label: 'Sitio web', type: 'web' },
          ].map((b, i) => (
            <div
              key={b.type}
              className={`${styles.shareBtn} ${styles.animShareBtn} ${v}`}
              style={{ transitionDelay: visible ? `${1.2 + i * 0.15}s` : '0s' }}
            >
              <span>{b.icon}</span> {b.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BookMock() {
  const { ref, visible } = useInView(0.3)
  const v = visible ? styles.animVisible : ''

  return (
    <div className={`${styles.mockPhone} ${styles.animPhone} ${v}`} ref={ref}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneBody}>
        <p className={styles.phoneProName}>Francisco Valdés</p>
        <p className={styles.phoneProRole}>Psicólogo clínico</p>
        <div className={`${styles.phoneService} ${styles.animService} ${v}`}>
          <span>🧠</span>
          <div>
            <p className={styles.phoneServiceName}>Sesión individual</p>
            <p className={styles.phoneServiceMeta}>50 min · $35.000</p>
          </div>
        </div>
        <div className={styles.phoneDays}>
          {['Lu 12', 'Ma 13', 'Mi 14', 'Ju 15'].map((d, i) => (
            <span
              key={d}
              className={`${styles.phoneDay} ${styles.animDay} ${v} ${i === 2 ? styles.animDaySelect : ''}`}
              style={{ transitionDelay: visible ? `${0.5 + i * 0.1}s` : '0s' }}
            >{d}</span>
          ))}
        </div>
        <div className={styles.phoneSlots}>
          {['09:00', '10:00', '11:00', '15:00'].map((t, i) => (
            <span
              key={t}
              className={`${styles.phoneSlot} ${styles.animSlot} ${v} ${i === 1 ? styles.animSlotSelect : ''}`}
              style={{ transitionDelay: visible ? `${1.0 + i * 0.08}s` : '0s' }}
            >{t}</span>
          ))}
        </div>
        <div className={`${styles.phonePayBtn} ${styles.animPayBtn} ${v}`}>Pagar $35.000 →</div>
      </div>
    </div>
  )
}

function PayMock() {
  const { ref, visible } = useInView(0.3)
  const v = visible ? styles.animVisible : ''

  return (
    <div className={styles.mockCard} ref={ref}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Mis ingresos</span>
      </div>
      <div className={styles.mockBody}>
        <div className={`${styles.payTotal} ${styles.animPayTotal} ${v}`}>
          <span className={styles.payLabel}>Transferido esta semana</span>
          <span className={styles.payAmount}>
            {visible ? <CountUp target={245000} /> : '$0'}
          </span>
        </div>
        <div className={styles.payRows}>
          {[
            { name: 'Camila R. — Sesión individual', date: 'Lun 12 Ene · 10:00', amount: '$34.000' },
            { name: 'Tomás M. — Sesión individual', date: 'Lun 12 Ene · 11:00', amount: '$34.000' },
            { name: 'Valentina S. — Sesión individual', date: 'Mar 13 Ene · 09:00', amount: '$34.000' },
          ].map((row, i) => (
            <div
              key={i}
              className={`${styles.payRow} ${styles.animPayRow} ${v}`}
              style={{ transitionDelay: visible ? `${0.4 + i * 0.2}s` : '0s' }}
            >
              <span className={styles.payRowIcon}>✓</span>
              <div>
                <p className={styles.payRowName}>{row.name}</p>
                <p className={styles.payRowDate}>{row.date}</p>
              </div>
              <span className={styles.payRowAmount}>{row.amount}</span>
            </div>
          ))}
        </div>
        <p className={`${styles.payNote} ${styles.animPayNote} ${v}`}>
          Comisión NORA: $1.000 por reserva · ya descontada
        </p>
      </div>
    </div>
  )
}

const mocks: Record<string, React.FC> = {
  config: ConfigMock,
  share: ShareMock,
  book: BookMock,
  pay: PayMock,
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Cómo funciona</span>
          <h2 className="section-title">De WhatsApp a pagos automáticos</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            4 pasos. Sin fricciones. Sin coordinación manual.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => {
            const Mock = mocks[s.mock]
            const isReversed = i % 2 !== 0
            return (
              <div key={s.num} className={`${styles.step} ${isReversed ? styles.stepReversed : ''}`}>
                <div className={styles.stepContent}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepDot} />
                    <span className={styles.stepLine} />
                  </div>
                  <div>
                    <span className={styles.stepLabel}>Paso {i + 1}</span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
                <div className={styles.stepMock}>
                  <Mock />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
