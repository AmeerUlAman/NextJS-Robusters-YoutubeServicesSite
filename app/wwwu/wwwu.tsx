import React from 'react';
import styles from './wwwu.module.css';
import Image from 'next/image';

const Wwwu = () => {
  return (
    <div style={{marginTop:"55px"}} id='wwwu'>   <h2 className={styles.h2} >Why Work With Us</h2>
    <div className={styles.container} >
      <div className={styles.fi}>
        <center><Image width={150} height={150} src={'/brandimage.png'} quality={100} alt='BRAND' className={styles.ch}/></center>
 
    <h3 className={styles.h3}>We Build Lasting Brands, Not Just Channels</h3>
    <p className={styles.p}>
      We focus on YouTube presence that stands out from the crowd. Our team
      develops a unique voice and style for your content, establishing a loyal
      fanbase that keeps coming back for more. With Robustors, you're not just
      another channel – you're a brand that viewers remember and engage with.
    </p>
    </div>
    <div className={styles.fi}>
      <center> <Image width={150} height={150} src={'/passiveincome.png'} quality={100} alt='multiple source income' className={styles.ch}/></center>
   
    <h3 className={styles.h3}>Multiple Income Streams, Not Just a Single One</h3>
    <p className={styles.p}>
      We don’t rely solely on AdSense. We focus on developing multiple revenue
      streams, including attracting sponsorships, setting up affiliate programs,
      creating merchandise, selling products, and optimizing channel memberships.
      We ensure your channel isn't just popular – it's profitable in multiple ways.
    </p>
    </div>
    <div className={styles.fi}>
      <center><Image width={150} height={150} src={'/promotion.png'} quality={100} alt='promotion' className={styles.ch}/></center>
    
    <h3 className={styles.h3}>Hands-Off Success, Long-Term Growth</h3>
    <p className={styles.p}>
      You bring the ideas, we handle everything else. From scripting to uploading,
      our team takes care of every aspect of your YouTube presence. We implement
      strategies for steady, sustainable growth, adapting to algorithm changes to
      ensure lasting success. With Robustors, you get the benefits of a professional
      YouTube team without the stress of day-to-day management.
    </p>
    </div>
    
  </div>
  </div>)
}

export default Wwwu
