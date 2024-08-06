import React from 'react';
import styles from './hero.module.css';
import ScrollingImages from '../scrollimage/scrollingimage';
import Image from 'next/image';
const Hero = () => {
  return (
    <div  id="hero">
      <div className={styles.background}>
 <div className={styles.hemain}>
   <center><h1 className={styles.text1}>Building Branded <span className="div">YouTube</span> Channels
For Long-Term Success</h1> </center>     
 
<center><p className={styles.text2}>We build sustainable multi revenue YouTube brands</p> </center>
 

<div className={styles.centbut}>
  <center> <button className={styles.butsty}>SEE PLANS</button></center> 
    {/* <button  className={styles.butsty}>CONTACT US</button> */}
 </div> 
  </div>  
  
  <div className={styles.img}>

    <div className={styles.ac}>
    <center><Image src={'/youtube.png'} height={512} width={512} quality={100} alt='YOUTUBE' className={styles.ima}/></center>
    </div>

  </div>
    </div>
      
    </div>
  )
}

export default Hero
