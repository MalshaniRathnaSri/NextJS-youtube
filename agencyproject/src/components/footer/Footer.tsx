import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lama Agency</div>
        <div>
          Lama creative throughts agency &copy; All rights reserved.
        </div>
    </div>
  )
}

export default Footer
