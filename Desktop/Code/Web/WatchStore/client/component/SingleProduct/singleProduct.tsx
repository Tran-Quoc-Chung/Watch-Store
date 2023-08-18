import React from 'react'
import styles from './singleproduct.module.css';
import Image from 'next/image';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProduct = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={300}
            height={300}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.images}>
          <Image
            src={props.src}
            width={277}
            height={277}
            alt='Not found'
          />
        </div>
        <div className={styles.desc}>
          <i className={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></i>
          <p className={styles.tag}>Đồng hồ nữ</p>
          <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
          <p className={styles.price}>17,640,000 ₫</p>
        </div>
      </div>



    </div>

  )
}

export default SingleProduct
