import React from 'react';
import styles from './hero.module.css';
import ScrollingImages from '../scrollimage/scrollingimage';
const Hero = () => {
  return (
    <div  id="hero">
      <div className={styles.background}>
   <center><h1 className={styles.text1}>Building Branded <span className="div">YouTube</span> Channels
For Long-Term Success</h1> </center>     
 <p className={styles.text2}>We build sustainable multi revenue YouTube brands</p> 



{/* <div className={styles.im2}></div>
  <div className={styles.im3}></div>  
  <div className={styles.im1}></div> 
  <div className={styles.im4}></div> 
  <div className={styles.im5}></div>   */}
<ScrollingImages/>

<div className={styles.centbut}>
    <button className={styles.butsty}>SEE PLANS</button>
    <button  className={styles.butsty}>CONTACT US</button>
 </div> 
      </div>
      
    </div>
  )
}

export default Hero
