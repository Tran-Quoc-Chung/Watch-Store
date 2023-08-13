'use client'
import React from 'react'
import styles from './infodetail.module.css'
import SliderInfoDetail from '../sliderinfodetail/sliderinfodetail';
const Infodetail = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> {props.title}</h1>
      </div>
      <div className={styles.listproduct}>
        <SliderInfoDetail src={props.src} />
      </div>
    </div>
  )
}

export default Infodetail
