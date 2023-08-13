import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.info} ${styles.nav}`}>
          <h2>ĐIỀU HƯỚNG</h2>
      </div>
      <div className={`${styles.info} ${styles.desc}`} >
        <Image
          src={logo}
          width={200}
          height={63}
          alt='Not found'
        />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....</p>
        <div className={styles.input}>
          <input placeholder='Email ...' />
          <button>--></button>
        </div>
        <p>© Website fullstack.</p>
      </div>
      <div className={`${styles.info} ${styles.contact}`}>
        <h2>THÔNG TIN LIÊN HỆ</h2>
        <p>01 TP Thủ Đức, TP Hồ Chí Minh, Việt Nam</p>
        <p>034 123 3210</p>
        <p>admin@gmail.com</p>
        <p>Website Fullstack</p>
      </div>
    </div>
  )
}

export default Footer
