'use client'
import React from 'react'
import styles from './couplewatch.module.css'
import SliderProduct from '../sliderproduct/sliderproduct';
import couplewatch from '../../public/couplewatch.jpg';
const CoupleWatch = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> {props.title}</h1>
      </div>
      <div className={styles.listproduct}>
        <SliderProduct src={couplewatch} />
      </div>
    </div>
  )
}

export default CoupleWatch
