import styles from './ServiceArea.module.css'

export default function ServiceArea({ location }) {
  return (
    <>
      <servicearea className={styles.servicearea}>
        <center>
          <p> <b> {location} </b> </p>
        </center>
      </servicearea>
    </>
  )
}
