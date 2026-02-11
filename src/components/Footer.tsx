import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>NORA</span>
        <ul className={styles.links}>
          <li><a href="#problema">Problema</a></li>
          <li><a href="#solucion">Solución</a></li>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#precio">Precio</a></li>
        </ul>
        <span className={styles.copy}>© 2026 NORA. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
