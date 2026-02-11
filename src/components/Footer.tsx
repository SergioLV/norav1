import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>NORA <span className={styles.logoSub}>Agendamiento + Pagos</span></span>
        <ul className={styles.links}>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#precio">Precio</a></li>
          <li><a href="#calculadora">Calculadora</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <span className={styles.copy}>© 2026 NORA. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
