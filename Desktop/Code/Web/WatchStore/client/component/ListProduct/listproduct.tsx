'use client'
import React from 'react'
import styles from './listproduct.module.css'
import SingleProduct from '../SingleProduct/singleProduct'
const ListProduct = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> {props.title }</h1>
      </div>
      <div className={styles.listproduct}>
        <SingleProduct src={ props.src} />
      </div>
    </div>
  )
}

export default ListProduct
