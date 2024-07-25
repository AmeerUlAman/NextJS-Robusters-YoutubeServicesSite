// components/ProjectCard.tsx
import Image from 'next/image';
import styles from './TierCard.module.css';

interface ProjectCardProps {
  tier:string;
  title: string;
  description: string;
  webUrl: string;
  but:string;
  butid:string;
  reverse: boolean;
}

const TierCard: React.FC<ProjectCardProps> = ({ tier,title, description, webUrl,but,butid, reverse }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.image}>
        <iframe width="100%" height="100%" src={webUrl} title="YouTube video player"  className={styles.ifr} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className={styles.content}>
      <center><h1>{tier}</h1></center>
    <center><h2 className={styles.title}>{title}</h2></center>    
        <p className={styles.description}>{description}</p>
        {/* <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">Visit!</a> */}
    <center><button className={styles.butst} id={butid}>{but}</button></center>  
      </div>
    </div>
  );
};

export default TierCard;
