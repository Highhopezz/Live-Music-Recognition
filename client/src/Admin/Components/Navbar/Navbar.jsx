import React from 'react'
import styles from './navbar.module.css'
import HeadphonesIcon from '@mui/icons-material/Headphones';
const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav_icon}>
        <HeadphonesIcon></HeadphonesIcon>
      </div>
    </div>
  )
}

export default Navbar