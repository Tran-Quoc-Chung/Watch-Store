'use client'
import React from 'react'
import styles from './accessory.module.css'
import SliderProduct from '../sliderproduct/sliderproduct';
const Accessory = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> {props.title}</h1>
      </div>
      <div className={styles.listproduct}>
        <SliderProduct src={props.src} />
      </div>
    </div>
  )
}

export default Accessory
