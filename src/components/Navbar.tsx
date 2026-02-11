import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          NORA
          <span className={styles.logoSub}>Agendamiento + Pagos</span>
        </a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><a href="#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</a></li>
          <li><a href="#precio" onClick={() => setOpen(false)}>Precio</a></li>
          <li><a href="#calculadora" onClick={() => setOpen(false)}>Calculadora</a></li>
          <li><a href="#faq" onClick={() => setOpen(false)}>FAQ</a></li>
        </ul>

        <a href="#cta" className={`btn-primary ${styles.cta}`}>Crear mi link</a>
      </div>
    </nav>
  )
}
