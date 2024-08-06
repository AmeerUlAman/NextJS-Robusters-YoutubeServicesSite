import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';

const Hero2 = () => {
  return (<div  id="hero"> 
    <div className={styles.fadehr}></div>
      <div className={styles.background}>
    <div className={styles.overlay}></div>
    <div className={styles.text}>
    <div className={styles.introtexta}>
       <h1>Building Branded <span className={styles.div}>YouTube</span> Channels
       For Long-Term Success</h1>     
          <p>We build sustainable multi revenue YouTube brands</p>
          {/* <ul>
            <li>Open-Source GIS Solutions</li>
            <li>Web & Mobile Development</li>
            <li>Complete ArcGIS Suite development</li>
            <li>Automation pipelines</li>
          </ul> */}

          {/* <div className={styles.centbut}> */}
          <button className={styles.butsty}>Explore</button>
          <button className={styles.butsty}>Get in touch</button>
          {/* </div> */}
        </div>
    </div>
  </div>
  <div className={styles.fadehr}></div>
</div>
  )
}

export default Hero2
