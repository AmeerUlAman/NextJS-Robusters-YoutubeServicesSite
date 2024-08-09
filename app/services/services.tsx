import React from 'react';
import styles from './services.module.css';
import Cards from './cards';

const CardData=[
  {
    image:'/search.png',
    head:'Channel Branding ' ,
    para:'We create a unique look and feel for your channel that stands out and attracts viewers.',
    },
    {
      image:'/research.png',
      head:'Topic Research' ,
      para:'We find trending topics in your niche that your audience will love',
      },
      {
        image:'/script.png',
        head:'Script Writing' ,
        para:'Our team crafts engaging scripts that keep viewers watching till the end',
        },
        {
          image:'/voice.png',
          head:'Voice Over' ,
          para:'We provide clear, engaging voice overs that bring your content to life.',
          },
          {
            image:'/video.png',
            head:'Video Editing' ,
            para:'We turn raw footage into polished videos that look professional and grab attention',
            },
            {
              image:'/image.png',
              head:'Thumbnail Creation' ,
              para:'We design eye-catching thumbnails that make people want to click on your videos.',
              },
              {
                image:'/seo.png',
                head:'SEO Optimization' ,
                para:'We use the right tags, titles, and descriptions to help your videos show up in searches.',
                },
                {
                  image:'/upload.png',
                  head:'Video Uploading' ,
                  para:'We handle the technical stuff, uploading your videos at the best times for maximum views.',
                  },
                                                                                                          
          


];


const Services = () => {
  return (
 <div id="services">
    <div className={styles.bg}>  
  <center><h1 className={styles.ser}><span style={{backgroundColor:"red",padding:"7px",borderRadius:"14px"}}>Services</span></h1></center>
  <center><p className={styles.pp} style={{color:"white"}}>What we offer in our sevices are a vast amount of options for one to select</p></center>
   <div className={styles.cbox}>
      {CardData.map((card,index)=>(
<Cards
key={index}
image={card.image}
title={card.head} 
para={card.para}
/>
      ))}
    </div>
 </div> 
 </div>)
}

export default Services
