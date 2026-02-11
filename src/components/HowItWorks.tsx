import styles from './HowItWorks.module.css'

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
  return (
    <div className={styles.mockCard}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Mi agenda</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.serviceRow}>
          <span className={styles.serviceIcon}>🧠</span>
          <div>
            <p className={styles.serviceName}>Sesión de psicología</p>
            <p className={styles.serviceMeta}>50 min · $35.000</p>
          </div>
          <span className={styles.serviceToggle} />
        </div>
        <div className={styles.serviceRow}>
          <span className={styles.serviceIcon}>🥗</span>
          <div>
            <p className={styles.serviceName}>Consulta nutricional</p>
            <p className={styles.serviceMeta}>40 min · $25.000</p>
          </div>
          <span className={styles.serviceToggle} />
        </div>
        <div className={styles.timeGrid}>
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map((d) => (
            <div key={d} className={styles.timeCol}>
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
  return (
    <div className={styles.mockCard}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Compartir</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.linkBox}>
          <span className={styles.linkIcon}>🔗</span>
          <span className={styles.linkText}>nora.cl/psicologia/<strong>francisco-valdes</strong>/agendamiento</span>
        </div>
        <div className={styles.shareButtons}>
          <div className={styles.shareBtn} data-type="ig">
            <span>📸</span> Bio de Instagram
          </div>
          <div className={styles.shareBtn} data-type="wa">
            <span>💬</span> Respuesta rápida WhatsApp
          </div>
          <div className={styles.shareBtn} data-type="web">
            <span>🌐</span> Sitio web
          </div>
        </div>
      </div>
    </div>
  )
}

function BookMock() {
  return (
    <div className={styles.mockPhone}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneBody}>
        <p className={styles.phoneProName}>Francisco Valdés</p>
        <p className={styles.phoneProRole}>Psicólogo clínico</p>
        <div className={styles.phoneService}>
          <span>🧠</span>
          <div>
            <p className={styles.phoneServiceName}>Sesión individual</p>
            <p className={styles.phoneServiceMeta}>50 min · $35.000</p>
          </div>
        </div>
        <div className={styles.phoneDays}>
          {['Lu 12', 'Ma 13', 'Mi 14', 'Ju 15'].map((d, i) => (
            <span key={d} className={`${styles.phoneDay} ${i === 2 ? styles.phoneDayActive : ''}`}>{d}</span>
          ))}
        </div>
        <div className={styles.phoneSlots}>
          <span className={styles.phoneSlot}>09:00</span>
          <span className={`${styles.phoneSlot} ${styles.phoneSlotActive}`}>10:00</span>
          <span className={styles.phoneSlot}>11:00</span>
          <span className={styles.phoneSlot}>15:00</span>
        </div>
        <div className={styles.phonePayBtn}>Pagar $35.000 →</div>
      </div>
    </div>
  )
}

function PayMock() {
  return (
    <div className={styles.mockCard}>
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>Mis ingresos</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.payTotal}>
          <span className={styles.payLabel}>Transferido esta semana</span>
          <span className={styles.payAmount}>$245.000</span>
        </div>
        <div className={styles.payRows}>
          <div className={styles.payRow}>
            <span className={styles.payRowIcon}>✓</span>
            <div>
              <p className={styles.payRowName}>Camila R. — Sesión individual</p>
              <p className={styles.payRowDate}>Lun 12 Ene · 10:00</p>
            </div>
            <span className={styles.payRowAmount}>$34.000</span>
          </div>
          <div className={styles.payRow}>
            <span className={styles.payRowIcon}>✓</span>
            <div>
              <p className={styles.payRowName}>Tomás M. — Sesión individual</p>
              <p className={styles.payRowDate}>Lun 12 Ene · 11:00</p>
            </div>
            <span className={styles.payRowAmount}>$34.000</span>
          </div>
          <div className={styles.payRow}>
            <span className={styles.payRowIcon}>✓</span>
            <div>
              <p className={styles.payRowName}>Valentina S. — Sesión individual</p>
              <p className={styles.payRowDate}>Mar 13 Ene · 09:00</p>
            </div>
            <span className={styles.payRowAmount}>$34.000</span>
          </div>
        </div>
        <p className={styles.payNote}>Comisión NORA: $1.000 por reserva · ya descontada</p>
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
