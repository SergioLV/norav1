import { useState } from 'react'
import styles from './Booking.module.css'

const PRO = {
  name: 'Javiera Saldívar',
  initials: 'JS',
  role: 'Psicóloga clínica',
  bio: 'Especialista en terapia cognitivo-conductual para adultos. Atención presencial y online.',
  location: 'Providencia, Santiago',
  modality: 'Presencial y online',
}

const SERVICES = [
  { id: 'individual', emoji: '🧠', name: 'Sesión individual', duration: '50 min', price: 35000 },
  { id: 'pareja', emoji: '💑', name: 'Terapia de pareja', duration: '80 min', price: 50000 },
  { id: 'primera', emoji: '👋', name: 'Primera consulta', duration: '60 min', price: 30000 },
]

const SLOTS: Record<string, string[]> = {
  default: ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00'],
  light: ['10:00', '11:00', '15:00', '16:00'],
}

const DAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function formatCLP(n: number) {
  return '$' + n.toLocaleString('es-CL')
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function Booking() {
  const [step, setStep] = useState(0)
  const [serviceId, setServiceId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const today = new Date()
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear] = useState(today.getFullYear())

  const service = SERVICES.find(s => s.id === serviceId)
  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth)

  const slotsForDay = selectedDate
    ? (selectedDate.getDay() === 6 || selectedDate.getDay() === 0 ? [] : selectedDate.getDay() === 5 ? SLOTS.light : SLOTS.default)
    : []

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function isDisabled(day: number) {
    const d = new Date(viewYear, viewMonth, day)
    if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return true
    if (d.getDay() === 0 || d.getDay() === 6) return true
    return false
  }

  function isToday(day: number) {
    return viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate()
  }

  function isSelected(day: number) {
    if (!selectedDate) return false
    return selectedDate.getFullYear() === viewYear && selectedDate.getMonth() === viewMonth && selectedDate.getDate() === day
  }

  const stepLabels = ['Servicio', 'Fecha y hora', 'Confirmar']

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <span className={styles.logo}>
            NORA <span className={styles.logoSub}>Agendamiento + Pagos</span>
          </span>
          <span className={styles.powered}>Powered by NORA</span>
        </div>
      </div>

      {/* Main */}
      <div className={styles.main}>
        <div className={`container ${styles.layout}`}>
          {/* Left: Professional card */}
          <div className={styles.proCard}>
            <div className={styles.avatar}>
              <img src="/images/Javi.jpeg" alt={PRO.name} className={styles.avatarImg} />
            </div>
            <h1 className={styles.proName}>{PRO.name}</h1>
            <p className={styles.proRole}>{PRO.role}</p>
            <p className={styles.proBio}>{PRO.bio}</p>
            <div className={styles.proInfo}>
              <div className={styles.proInfoItem}>
                <span className={styles.proInfoIcon}>📍</span>
                {PRO.location}
              </div>
              <div className={styles.proInfoItem}>
                <span className={styles.proInfoIcon}>💻</span>
                {PRO.modality}
              </div>
            </div>
          </div>

          {/* Right: Booking flow */}
          <div className={styles.bookingFlow}>
            {/* Step indicator */}
            {!confirmed && (
              <div className={styles.steps}>
                {stepLabels.map((label, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`${styles.stepPill} ${i === step ? styles.active : ''} ${i < step ? styles.done : ''}`}>
                      {i < step ? '✓' : i + 1} {label}
                    </span>
                    {i < stepLabels.length - 1 && <span className={styles.stepLine} />}
                  </div>
                ))}
              </div>
            )}

            {/* Step 0: Service selection */}
            {step === 0 && !confirmed && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Elige un servicio</h2>
                <p className={styles.cardSub}>Selecciona el tipo de sesión que necesitas</p>
                <div className={styles.services}>
                  {SERVICES.map(s => (
                    <div
                      key={s.id}
                      className={`${styles.serviceOption} ${serviceId === s.id ? styles.selected : ''}`}
                      onClick={() => setServiceId(s.id)}
                    >
                      <span className={styles.serviceEmoji}>{s.emoji}</span>
                      <div className={styles.serviceInfo}>
                        <p className={styles.serviceName}>{s.name}</p>
                        <p className={styles.serviceMeta}>{s.duration}</p>
                      </div>
                      <span className={styles.servicePrice}>{formatCLP(s.price)}</span>
                      <span className={styles.serviceRadio} />
                    </div>
                  ))}
                </div>
                <div className={styles.navBtns}>
                  <button className={styles.btnNext} disabled={!serviceId} onClick={() => setStep(1)}>
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Date & time */}
            {step === 1 && !confirmed && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Elige fecha y hora</h2>
                <p className={styles.cardSub}>{service?.name} · {service?.duration} · {formatCLP(service?.price ?? 0)}</p>

                {/* Calendar */}
                <div className={styles.calendarNav}>
                  <button className={styles.calendarBtn} onClick={prevMonth}>‹</button>
                  <span className={styles.calendarMonth}>{MONTHS[viewMonth]} {viewYear}</span>
                  <button className={styles.calendarBtn} onClick={nextMonth}>›</button>
                </div>
                <div className={styles.calendarGrid}>
                  {DAYS.map(d => <span key={d} className={styles.calendarDayLabel}>{d}</span>)}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <span key={`e${i}`} className={`${styles.calendarDay} ${styles.calendarDayEmpty}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const disabled = isDisabled(day)
                    return (
                      <button
                        key={day}
                        className={`${styles.calendarDay} ${isSelected(day) ? styles.calendarDaySelected : ''} ${isToday(day) ? styles.calendarDayToday : ''} ${disabled ? styles.calendarDayDisabled : ''}`}
                        onClick={() => { if (!disabled) { setSelectedDate(new Date(viewYear, viewMonth, day)); setSelectedTime(null) } }}
                        disabled={disabled}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <>
                    <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}>
                      Horarios disponibles — {selectedDate.getDate()} de {MONTHS[selectedDate.getMonth()]}
                    </h3>
                    {slotsForDay.length > 0 ? (
                      <div className={styles.timeSlots}>
                        {slotsForDay.map(t => (
                          <button
                            key={t}
                            className={`${styles.timeSlot} ${selectedTime === t ? styles.timeSlotSelected : ''}`}
                            onClick={() => setSelectedTime(t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.noSlots}>No hay horarios disponibles este día</p>
                    )}
                  </>
                )}

                <div className={styles.navBtns}>
                  <button className={styles.btnBack} onClick={() => setStep(0)}>← Volver</button>
                  <button className={styles.btnNext} disabled={!selectedDate || !selectedTime} onClick={() => setStep(2)}>
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Summary & pay */}
            {step === 2 && !confirmed && service && selectedDate && selectedTime && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Confirma tu reserva</h2>
                <p className={styles.cardSub}>Revisa los detalles antes de pagar</p>

                <div className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Profesional</span>
                    <span className={styles.summaryValue}>{PRO.name}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Servicio</span>
                    <span className={styles.summaryValue}>{service.name}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Duración</span>
                    <span className={styles.summaryValue}>{service.duration}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Fecha</span>
                    <span className={styles.summaryValue}>{selectedDate.getDate()} de {MONTHS[selectedDate.getMonth()]}, {viewYear}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Hora</span>
                    <span className={styles.summaryValue}>{selectedTime} hrs</span>
                  </div>
                  <div className={styles.summaryDivider} />
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Precio sesión</span>
                    <span className={styles.summaryValue}>{formatCLP(service.price)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Costo medio de pago</span>
                    <span className={styles.summaryValue}>{formatCLP(Math.round(service.price * 0.0299 * 1.19))}</span>
                  </div>
                  <div className={styles.summaryDivider} />
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Total a pagar</span>
                    <span className={`${styles.summaryValue} ${styles.summaryTotal}`}>
                      {formatCLP(service.price + Math.round(service.price * 0.0299 * 1.19))}
                    </span>
                  </div>
                </div>

                <button className={styles.payBtn} onClick={() => setConfirmed(true)}>
                  Pagar {formatCLP(service.price + Math.round(service.price * 0.0299 * 1.19))} →
                </button>
                <p className={styles.payNote}>Pago seguro procesado por Payku</p>

                <div className={styles.navBtns}>
                  <button className={styles.btnBack} onClick={() => setStep(1)}>← Volver</button>
                </div>
              </div>
            )}

            {/* Confirmation */}
            {confirmed && service && selectedDate && selectedTime && (
              <div className={styles.card}>
                <div className={styles.confirmation}>
                  <div className={styles.confirmIcon}>✓</div>
                  <h2 className={styles.confirmTitle}>Reserva confirmada</h2>
                  <p className={styles.confirmSub}>
                    Tu sesión con {PRO.name} ha sido agendada y pagada.<br />
                    Recibirás confirmación y recordatorios por WhatsApp.
                  </p>
                  <div className={styles.confirmDetails}>
                    <div className={styles.confirmRow}>
                      <span className={styles.confirmLabel}>Servicio</span>
                      <span className={styles.confirmValue}>{service.name}</span>
                    </div>
                    <div className={styles.confirmRow}>
                      <span className={styles.confirmLabel}>Fecha</span>
                      <span className={styles.confirmValue}>{selectedDate.getDate()} de {MONTHS[selectedDate.getMonth()]}, {viewYear}</span>
                    </div>
                    <div className={styles.confirmRow}>
                      <span className={styles.confirmLabel}>Hora</span>
                      <span className={styles.confirmValue}>{selectedTime} hrs</span>
                    </div>
                    <div className={styles.confirmRow}>
                      <span className={styles.confirmLabel}>Total pagado</span>
                      <span className={styles.confirmValue}>{formatCLP(service.price + Math.round(service.price * 0.0299 * 1.19))}</span>
                    </div>
                  </div>
                  <a href="#" className={styles.confirmWa}>💬 Abrir WhatsApp</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            Agendamiento y pagos por <a href="/" className={styles.footerLink}>NORA</a>
          </p>
        </div>
      </div>
    </div>
  )
}
