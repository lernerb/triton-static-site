import styles from './VerticleRowReverse.module.css'



export default function VerticalRowReverse({ title, description }) {
  return (
    <>
      <verticlerowreverse className={styles.container}>
        <div className={styles.left}>
          <div className={styles.centered}>
            <img src="exterior.jpg" alt="Paint" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.centered}>
            <div className={styles.itemtitle}>Exterior Services</div>
            <p>🖌️&nbsp;&nbsp; Exterior Residential Painting</p>
            <p>🖌️&nbsp;&nbsp; Gutter Painting</p>
            <p>🖌️&nbsp;&nbsp; Deck Painting &amp; Staining</p>
            <p>🖌️&nbsp;&nbsp; Deck Sanding, Repairs &amp; Refinishing</p>
            <p>🖌️&nbsp;&nbsp; Exterior Pressure Washing</p>
            <p>🖌️&nbsp;&nbsp; Window Painting</p>
            <p>🖌️&nbsp;&nbsp; Exterior Commercial Painting</p>
            <p>🖌️&nbsp;&nbsp; Damaged Wood Repair</p>
            <p>🖌️&nbsp;&nbsp; Exterior Masonry Painting</p>

          </div>
        </div>
      </verticlerowreverse>
    </>
  )
}
