import styles from './contact.module.css'
import React from 'react'
import Img from '../../public/vanphong.jpg'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={Img} 
                width={800}
                height={340}
                alt='Not Found'/>
      </div>
      <div className={styles.layer}>
        <div className={styles.letter}>
            <h1>GET IN TOUCH</h1>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
            laoreet dolore magna aliquam erat volutpat.</h2>
            <p>Um quist, a seque et audae. Namus aut voloriae. Ecesti volupta sinihil maxim hit quis dicid ut dolorer spiscip suntium 
            eveniet hicatibus, omnit dignam ulparis aut odit, et expero tectiossi acitis aribus dis cus soluptur a dolo incipis plam, expe enditatatur 
            aut et volorpor aute repta non coreri dellaboratur acea praeritio blaut voluptio. Xerum quame re pe officae.</p>
        </div>
        <div className={styles.layer2}>
          <div className={styles.letter2}>
          <form>
              <label htmlFor="name" className={styles.placeholder}>Họ và tên</label>
              <input type="text" id="name" name="name" required />
        
              <label htmlFor="email" className={styles.placeholder}>Email</label>
              <input type="email" id="email" name="email" required />
              <br />
        
              <label htmlFor="phone" className={styles.placeholder}>SĐT</label>
              <input type="text" id="phone" name="phone" required />

              <label htmlFor="SL" className={styles.placeholder}>Số lượng</label>
              <input type="text" id="SL" name="SL" required />
              <br />

              <label htmlFor="content" className={styles.placeholder} >Lời nhắn</label>
              <input className={styles.letterContent} type="text" id="content" name="content" required/>
              <br />
        
              <button type="submit">Gửi</button>
            </form>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
