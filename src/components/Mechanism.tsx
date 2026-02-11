import styles from './Mechanism.module.css'

const steps = [
  { num: '1', text: 'El paciente agenda' },
  { num: '2', text: 'El sistema solicita el pago' },
  { num: '3', text: 'La hora queda confirmada' },
  { num: '4', text: 'Se envían recordatorios automáticos' },
]

export default function Mechanism() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div>
            <span className="section-label" style={{ color: '#E4B4A6' }}>El mecanismo</span>
            <h2 className={styles.title}>Porque ya no eres tú quien cobra. Es el sistema.</h2>
            <p className={styles.desc}>
              La razón por la que muchos profesionales no piden pago anticipado es simple:
              se siente incómodo. Con NORA, el paciente entiende que el pago es parte del proceso.
              No es personal.
            </p>
            <p className={styles.quote}>"Ah, es que el sistema lo pide."</p>
          </div>

          <div className={styles.flow}>
            {steps.map((s, i) => (
              <div key={i}>
                <div className={styles.flowStep}>
                  <span className={styles.flowNum}>{s.num}</span>
                  <span>{s.text}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.flowLine} />}
              </div>
            ))}
            <div className={styles.flowResult}>
              El pago previo transforma una intención en un compromiso.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
