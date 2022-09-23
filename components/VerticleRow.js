import styles from './VerticleRow.module.css'



export default function VerticalRow({ title, description }) {
  return (
    <>
      <verticlerow className={styles.container}>
        <div className={styles.left}>
          <div className={styles.centered}>
            <img src="paint.jpg" alt="Paint" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.centered}>
            <div className={styles.itemtitle}>Interior Services</div>
            <p>🖌️&nbsp;&nbsp; Interior Residential Painting</p>
            <p>🖌️&nbsp;&nbsp; Drywall or Wall Surface Repair</p>
            <p>🖌️&nbsp;&nbsp; Skim Coating</p>
            <p>🖌️&nbsp;&nbsp; Epoxy Floors</p>
            <p>🖌️&nbsp;&nbsp; Wallpaper Application and Removal</p>
            <p>🖌️&nbsp;&nbsp; Interior Trim &amp; Doors Painting</p>
            <p>🖌️&nbsp;&nbsp; Wall Patching</p>
            <p>🖌️&nbsp;&nbsp; Water Damage Repair</p>
            <p>🖌️&nbsp;&nbsp; Textured Finishes</p>
          </div>
        </div>
      </verticlerow>
    </>
  )
}
