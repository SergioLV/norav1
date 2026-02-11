import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>NORA</a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><a href="#problema" onClick={() => setOpen(false)}>Problema</a></li>
          <li><a href="#solucion" onClick={() => setOpen(false)}>Solución</a></li>
          <li><a href="#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</a></li>
          <li><a href="#precio" onClick={() => setOpen(false)}>Precio</a></li>
        </ul>

        <a href="#cta" className={`btn-primary ${styles.cta}`}>Crear mi link</a>
      </div>
    </nav>
  )
}
