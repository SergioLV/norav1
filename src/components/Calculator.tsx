import { useState } from 'react'
import styles from './Calculator.module.css'
import {
  PAYMENT_METHODS,
  PAYOUT_RATE,
  DEFAULT_IVA,
  DEFAULT_FEE_NORA,
  MIN_PRICE,
  MAX_PRICE,
  formatCLP,
} from './calculatorConfig'

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false)
  return (
    <span
      className={styles.tooltip}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
      role="button"
      tabIndex={0}
      aria-label="Más información"
    >
      ?
      {show && <span className={styles.tooltipText}>{text}</span>}
    </span>
  )
}

export default function Calculator() {
  const [price, setPrice] = useState<number | ''>('')
  const [methodId, setMethodId] = useState('cards')

  const method = PAYMENT_METHODS.find((m) => m.id === methodId)!
  const ratePayin = method.rate
  const iva = DEFAULT_IVA
  const feeNora = DEFAULT_FEE_NORA

  const P = typeof price === 'number' && price >= MIN_PRICE ? price : 0
  const valid = P > 0

  const costoPayin = Math.round(P * ratePayin * (1 + iva))
  const totalPaciente = P + costoPayin

  const costoPayout = Math.round(P * PAYOUT_RATE * (1 + iva))
  const netoProfesional = P - feeNora - costoPayout

  const lowWarning = valid && P <= 5000

  function handlePrice(val: string) {
    const clean = val.replace(/\D/g, '')
    if (clean === '') {
      setPrice('')
      return
    }
    const num = parseInt(clean, 10)
    if (num <= MAX_PRICE) setPrice(num)
  }

  return (
    <section id="calculadora" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Calculadora</span>
          <h2 className="section-title">¿Cuánto recibes por cada reserva?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Simula el cobro real según tu precio y método de pago.
          </p>
        </div>

        <div className={styles.calc}>
          {/* Inputs */}
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="calc-price">Precio del servicio (CLP)</label>
              <div className={styles.inputWrap}>
                <span className={styles.inputPrefix}>$</span>
                <input
                  id="calc-price"
                  type="text"
                  inputMode="numeric"
                  className={styles.input}
                  placeholder="25.000"
                  value={typeof price === 'number' ? price.toLocaleString('es-CL') : ''}
                  onChange={(e) => handlePrice(e.target.value)}
                />
              </div>
              {!valid && price !== '' && (
                <span className={styles.hint}>Ingresa un monto mínimo de {formatCLP(MIN_PRICE)}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="calc-method">Método de pago</label>
              <select
                id="calc-method"
                className={styles.select}
                value={methodId}
                onChange={(e) => setMethodId(e.target.value)}
              >
                {PAYMENT_METHODS.map((m) => (
                  <option key={m.id} value={m.id}>{m.label}</option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <span className={styles.tarifaRate}>
                Pay-in: {(ratePayin * 100).toFixed(2)}% + IVA · Payout: {(PAYOUT_RATE * 100).toFixed(2)}% + IVA
              </span>
            </div>
          </div>

          {/* Results */}
          <div className={`${styles.results} ${!valid ? styles.resultsDisabled : ''}`}>
            <div className={styles.resultCard}>
              <h3 className={styles.resultTitle}>
                <span className={styles.resultEmoji}>👤</span> Lo que paga el paciente
              </h3>
              <div className={styles.resultRows}>
                <div className={styles.resultRow}>
                  <span>Precio del servicio</span>
                  <span>{formatCLP(P)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span>
                    Costo medio de pago
                    <Tooltip text="Es el costo de procesar el pago online. Lo paga el paciente." />
                  </span>
                  <span>{formatCLP(costoPayin)}</span>
                </div>
                <div className={`${styles.resultRow} ${styles.resultTotal}`}>
                  <span>Total a pagar</span>
                  <span>{formatCLP(totalPaciente)}</span>
                </div>
              </div>
            </div>

            <div className={styles.resultCard}>
              <h3 className={styles.resultTitle}>
                <span className={styles.resultEmoji}>🩺</span> Lo que recibe el profesional
              </h3>
              <div className={styles.resultRows}>
                <div className={styles.resultRow}>
                  <span>Precio del servicio</span>
                  <span>{formatCLP(P)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span>
                    Fee NORA
                    <Tooltip text="NORA cobra $1.000 por cada reserva pagada. Sin suscripción." />
                  </span>
                  <span className={styles.resultMinus}>−{formatCLP(feeNora)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span>
                    Transferencia bancaria
                    <Tooltip text="Costo de transferir a tu cuenta bancaria (1,99% + IVA). Recibes el siguiente día hábil." />
                  </span>
                  <span className={styles.resultMinus}>−{formatCLP(costoPayout)}</span>
                </div>
                <div className={`${styles.resultRow} ${styles.resultTotal}`}>
                  <span>Pago neto</span>
                  <span>{formatCLP(netoProfesional)}</span>
                </div>
              </div>
            </div>
          </div>

          {valid && (
            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Paciente paga</span>
                <span className={styles.summaryValue}>{formatCLP(totalPaciente)}</span>
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Profesional recibe</span>
                <span className={`${styles.summaryValue} ${styles.summaryAccent}`}>{formatCLP(netoProfesional)}</span>
              </div>
            </div>
          )}

          {lowWarning && (
            <p className={styles.warning}>
              ⚠️ Con un precio bajo, el fee de NORA representa un porcentaje alto del cobro.
            </p>
          )}

          <div className={styles.microcopy}>
            <p>El costo del medio de pago lo paga el paciente.</p>
            <p>La transferencia bancaria al profesional tiene un costo de 1,99% + IVA.</p>
            <p>Recibes tu pago el siguiente día hábil.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
