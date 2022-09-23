import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>

        <div className={styles.businessname}>
          Triton Coating &amp; Construction
        </div>

        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.navigation}>
          <ul className={styles.navcontainer}>
            <li className={styles.navitem}><a href="/">Services</a></li>
            <li className={styles.navitem}><a href="/locations">Locations</a></li>
            <li className={styles.navitem}><a href="/reviews">Reviews</a></li>
            <li className={styles.navitem}><a href="/about">About</a></li>
          </ul>
        </div>

        <div className={styles.call}>
          <a href="tel:5515029819" className={styles.phone}>CALL US - (551) 502-9819</a>
        </div>
      </header>
    </>
  )
}
