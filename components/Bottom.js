import styles from './Bottom.module.css'

export default function Bottom() {
  return (
    <>
      <footer className={styles.bottom}>

        <div>
          <p>Service Areas</p>
          <ul>
            <li> Bergen County </li>
            <li> Rockland County </li>
            <li> Passaic County </li>
            <li> Westchester County </li>
            <li> Hudson County </li>
          </ul>
        </div>

        <div>
          <p>Contact Us</p>
          <ul>
            <li>
            By Phone:&nbsp;  
              <a href="tel:5515029819">(551) 502 - 9819 </a>
            </li>
            <li>
              By Email: 
              <a href="mailto:tritoncoating@gmail.com">tritoncoating@gmail.com</a>
            </li>
          </ul>
        </div>



      </footer>
    </>
  )
}
