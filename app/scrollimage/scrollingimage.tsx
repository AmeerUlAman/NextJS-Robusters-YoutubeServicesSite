// components/ScrollingImages.tsx
import React from 'react';
import styles from './ScrollingImages.module.css';

const images = [
    '/s1.png',
    '/s2.jpg',
    '/s3.png',
    '/s4.png',
    '/s5.jpeg',
    '/s6.png',
    '/s7.png',
    '/s8.jpg',
    '/s9.jpg',
    '/s10.jpg',
    '/s11.jpg',
    '/s12.jpg',
    '/s13.jpg',
    '/s14.jpg',
    '/s15.png',
    '/s16.jpg',
    '/s17.png',
    '/s18.png',
    '/s19.png',
    '/s20.png',
    '/s21.jpeg'

    // Add more images as needed
];

const ScrollingImages: React.FC = () => {
    return (
        <div className={styles.scroller}>
            <div className={styles.inner}>
                {images.concat(images).map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image} alt={`scrolling-image-${index}`} className={styles.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollingImages;
