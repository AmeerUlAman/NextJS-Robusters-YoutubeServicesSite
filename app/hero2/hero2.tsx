import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';

const Hero2 = () => {
  return (<div>   
    <div className={styles.fadehr}></div>
      <div className={styles.background}>
    <div className={styles.overlay}></div>
    <div className={styles.text}>
    <div className={styles.introtexta}>
       <h1>GIS Solutions & Services</h1>     
          <p>Top-tier Web GIS Development services to businesses.</p>
          {/* <ul>
            <li>Open-Source GIS Solutions</li>
            <li>Web & Mobile Development</li>
            <li>Complete ArcGIS Suite development</li>
            <li>Automation pipelines</li>
          </ul> */}

          <div className={styles.centbut}>
          <button className={styles.butsty}>Explore</button>
          <button className={styles.butsty}>Get in touch</button>
          </div>
        </div>
    </div>
  </div>
  <div className={styles.fadehr}></div>
</div>
  )
}

export default Hero2
