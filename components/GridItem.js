import styles from './GridItem.module.css'

export default function GridItem({ review, info }) {
  return (
    <>
      <griditem className={styles.griditem}>
        <center>
          <img src="/reviewangies.png" alt="Angies" className={styles.logo} />
        </center>
        <p> {review} </p>
        <p> <b> {info} </b> </p>
      </griditem>
    </>
  )
}
