import React from 'react';
import styles from './services.module.css';
import Cards from './cards';

const CardData=[
  {
    image:'/channelbranding.jpg',
    head:'Channel Branding ' ,
    para:'We create a unique look and feel for your channel that stands out and attracts viewers.',
    },
    {
      image:'/topicresearch.jpg',
      head:'Topic Research' ,
      para:'We find trending topics in your niche that your audience will love',
      },
      {
        image:'/scriptwriting.jpg',
        head:'Script Writing' ,
        para:'Our team crafts engaging scripts that keep viewers watching till the end',
        },
        {
          image:'/voiceover.jpg',
          head:'Voice Over' ,
          para:'We provide clear, engaging voice overs that bring your content to life.',
          },
          {
            image:'/videoediting.jpg',
            head:'Video Editing' ,
            para:'We turn raw footage into polished videos that look professional and grab attention',
            },
            {
              image:'/thumbnailcreation.jpg',
              head:'Thumbnail Creation' ,
              para:'We design eye-catching thumbnails that make people want to click on your videos.',
              },
              {
                image:'/seooptimization.jpg',
                head:'SEO Optimization' ,
                para:'We use the right tags, titles, and descriptions to help your videos show up in searches.',
                },
                {
                  image:'/videouploading.jpg',
                  head:'Video Uploading' ,
                  para:'We handle the technical stuff, uploading your videos at the best times for maximum views.',
                  },
                                                                                                          
          


];


const Services = () => {
  return (
 <div id="services">
    <div className={styles.bg}>  
  <center><h1 className={styles.ser}>Services</h1></center>
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
