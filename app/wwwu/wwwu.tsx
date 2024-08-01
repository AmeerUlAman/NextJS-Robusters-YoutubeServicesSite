import React from 'react';
import styles from './wwwu.module.css';
import Image from 'next/image';

const Wwwu = () => {
  return (
    <div style={{marginTop:"55px"}} id='wwwu'>   <h2 className={styles.h2} >Why Work With Us</h2>
    <div className={styles.container} >
      <div>
 
    <h3 className={styles.h3}>We Build Lasting Brands, Not Just Channels</h3>
    <p className={styles.p}>
      We focus on YouTube presence that stands out from the crowd. Our team
      develops a unique voice and style for your content, establishing a loyal
      fanbase that keeps coming back for more. With Robustors, you're not just
      another channel – you're a brand that viewers remember and engage with.
    </p>
    <h3 className={styles.h3}>Multiple Income Streams</h3>
    <p className={styles.p}>
      We don’t rely solely on AdSense. We focus on developing multiple revenue
      streams, including attracting sponsorships, setting up affiliate programs,
      creating merchandise, selling products, and optimizing channel memberships.
      We ensure your channel isn't just popular – it's profitable in multiple ways.
    </p>
    <h3 className={styles.h3}>Hands-Off Success, Long-Term Growth</h3>
    <p className={styles.p}>
      You bring the ideas, we handle everything else. From scripting to uploading,
      our team takes care of every aspect of your YouTube presence. We implement
      strategies for steady, sustainable growth, adapting to algorithm changes to
      ensure lasting success. With Robustors, you get the benefits of a professional
      YouTube team without the stress of day-to-day management.
    </p>
    </div>
    <div style={{margin:"5% 0px 0px 10% "}} className={styles.im}>
  <Image   width={329} height={300} quality={100} src={"/profic.png"} alt='PROFIT'/> 
    </div>
  </div>
  </div>)
}

export default Wwwu
