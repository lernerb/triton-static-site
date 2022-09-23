import styles from './Bottom.module.css'

export default function Bottom() {
  return (
    <>
      <footer className={styles.bottom}>

        <div className={styles.bottomitem}>
          <p className={styles.bottomtitle}>Areas We Serve</p>
          <ul>
            <li>Bergen County </li>
            <li>Rockland County </li>
            <li>Passaic County </li>
            <li>Westchester County </li>
            <li>Hudson County </li>
          </ul>
        </div>

        <div className={styles.bottomitem}>
          <p className={styles.bottomtitle}>Our Location</p>
          <>Triton Coating &amp; Construction</>
          <p>2 Fulton Place</p>
          <p>Fair Lawn, NJ 07410</p>

        </div>

        <div className={styles.bottomitem}>
          <p className={styles.bottomtitle}>Contact Us</p>
          <ul>
            <div>
              Phone:&nbsp;
              <a href="tel:5515029819">(551) 502 - 9819 </a>
            </div>
            <br/>
            <div>
              Email:
              <a href="mailto:tritoncoating@gmail.com">tritoncoating@gmail.com</a>
            </div>
          </ul>
        </div>



      </footer>
    </>
  )
}
