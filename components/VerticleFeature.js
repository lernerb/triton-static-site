import styles from './VerticleFeature.module.css'

import Section from '@components/Section'
import VerticalRow from './VerticleRow'
import VerticalRowReverse from './VerticleRowReverse'


  export default function VerticalFeatures({ }) {
  return (
    <>
      <verticlefeatures className={styles.container}>


        <Section
          title="Our Services"
          description="Professional Interior Painting, Exterior Painting, Powerwashing, and more."
        />
        <br/>
        <VerticalRow        />
        <br/>
        <br/>
        <br/>
        <VerticalRowReverse        />
        <br/>
        <br/>
        <br/>

      </verticlefeatures>
    </>
  )
}
