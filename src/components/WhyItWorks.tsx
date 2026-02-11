import styles from './WhyItWorks.module.css'

export default function WhyItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className="section-label">¿Por qué funciona?</span>
            <h2 className="section-title">Porque ya no eres tú quien cobra.<br />Es el sistema.</h2>
            <p className={styles.desc}>
              La razón por la que muchos profesionales no piden pago anticipado es simple:
              se siente incómodo. Nadie quiere ser "el que cobra" por WhatsApp.
            </p>
            <p className={styles.desc}>
              Con NORA, el paciente entiende que el pago es parte del proceso.
              No es personal. Es el sistema.
            </p>
            <p className={styles.quote}>
              "Ah, es que el sistema lo pide."
            </p>
          </div>

          <div className={styles.flow}>
            <div className={styles.flowStep}>
              <span className={styles.flowNum}>1</span>
              <span>El paciente agenda</span>
            </div>
            <div className={styles.flowLine} />
            <div className={styles.flowStep}>
              <span className={styles.flowNum}>2</span>
              <span>El sistema solicita pago</span>
            </div>
            <div className={styles.flowLine} />
            <div className={styles.flowStep}>
              <span className={styles.flowNum}>3</span>
              <span>La hora queda confirmada</span>
            </div>
            <div className={styles.flowLine} />
            <div className={styles.flowStep}>
              <span className={styles.flowNum}>4</span>
              <span>Nadie pide transferencia por WhatsApp</span>
            </div>
            <div className={styles.flowResult}>
              Resultado: menos plantones, cero incomodidad.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
