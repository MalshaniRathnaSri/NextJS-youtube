import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Throughts Agency.</h1>
        <p className={styles.desc}>
          In the heart of a bustling city, a quaint little bookstore stood as a sanctuary for book lovers. The scent of aged paper and ink filled the air, creating an atmosphere of nostalgia and warmth. Sunlight streamed through the large windows, casting a golden glow on the wooden shelves lined with books of every genre imaginable. Patrons meandered through the aisles, some lost in the pages of a gripping novel, others deep in conversation about their latest literary discoveries. 
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={'/brands.png'} alt='brandImage' fill className={styles.brandImage}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/hero.gif'} alt='heroImage' fill className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default page
