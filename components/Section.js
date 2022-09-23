import styles from './Section.module.css'

export default function Section({ title, description, line2 }) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description} > {description} </div>
      </section>
    </>
  )
}