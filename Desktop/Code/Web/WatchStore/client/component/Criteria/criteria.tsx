import React from 'react'
import styles from './criteria.module.css'
import Image from 'next/image'
import img from '../../public/tieuchi.jpg'
import { faTruck, faGift,faCoins} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Criteria() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}><FontAwesomeIcon icon={faTruck}  /></div>
        <div>
          <h2>Miễn Phí Giao Hàng</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetuer
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.icon}><FontAwesomeIcon icon={faGift}  /></div>
        <div>
          <h2>Quà Tặng Đặc Biệt</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetuer
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.icon}><FontAwesomeIcon icon={faCoins}  /></div>
        <div>
          <h2>Tiết Kiệm Khi Mua</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetuer
          </p>
        </div>
      </div>

    </div>
  )
}

export default Criteria
