import React from 'react';
import Tier from './Tier';
import styles from './TierCard.module.css';
const Vidtier=()=>{
  return (
    <div id="vidtiers">
      <div className={styles.extmar}></div>
      <center><h1 style={{color:'Black',fontSize:"67px"}}>Video Tier&#39;s</h1></center>
      <Tier/>
    </div>
  )
}
 

export default Vidtier;
