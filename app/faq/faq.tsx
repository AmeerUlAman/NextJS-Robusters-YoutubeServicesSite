import React from 'react';
import styles from './faq.module.css';

const Faq = () => {
  return (
    <div id='faq' style={{marginTop:'75px'}}>
      <center><h2 className={styles.h2}>FAQ</h2></center>  
    <div className={styles.container}>
    
      <div className={styles.question} >
        <h3 className={styles.h3}>Are all videos unique?</h3>
        <p className={styles.p}>
          Yes, we produce 100% unique videos for every client, with no duplicates and copyrights.
        </p>
      </div>
      <div className={styles.question}>
        <h3 className={styles.h3}>Is your service completely done for you?</h3>
        <p className={styles.p}>
          Yes, we offer end-to-end channel management. You simply tell us your demands, niche, and
          preferences, and we handle the rest, from ideation to uploading the final video.
        </p>
      </div>
      <div className={styles.question}>
        <h3 className={styles.h3}>Do I need to give you my Google account access?</h3>
        <p className={styles.p}>
          Absolutely not. YouTube allows you to grant access to your channel without sharing your
          Google account credentials. You can give us editor access, which enables us to upload and
          schedule videos, and conduct A/B testing to improve your channel&#39;s CTR and AVD.
        </p>
      </div>
    </div>   
    </div>
  )
}

export default Faq
