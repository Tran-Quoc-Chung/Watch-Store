'use client'
import React from 'react'
import styles from '../menwatch/menwatch.module.css'
import { useState } from 'react'
import SingleProduct from '@/component/SingleProduct/singleProduct';
import img from '../../public/dong-ho-tissot-t41.1.183.34-nu-tu-dong-day-inox-600x600.jpg'
import Category from '@/component/category/category';
const Introduce = () => {
  const [isOpen,setIsOpen]=React.useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>trang chủ / </h3>
          <h3> &nbsp; đồng hồ đôi</h3>
        </div>
        <div className={styles.filter}>
          <p>Xem tất cả 8 kết quả</p>
          <select >
            <option value="a">Thứ tự mặc định</option>
            <option value="b">Thứ tự theo mức độ phổ biến</option>
            <option value="c">Thứ tự theo điểm đánh giá</option>
            <option value="d">Thứ tự theo sản phẩm mới</option>
            <option value="d">Thứ tự theo giá: thấp đến cao</option>
            <option value="d">Thứ tự theo giá: cao đến thấp</option>
          </select>
        </div>
      </div>

      <div className={styles.listproduct}>
        <div className={styles.category}>
          <Category/>
        </div>
        <div className={styles.product}>
          <SingleProduct src={img} />
        </div>
      </div>

    </div>
  )
}

export default Introduce
