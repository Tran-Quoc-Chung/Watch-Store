import React from 'react'
import styles from './introduction.module.css'
import Img1 from '../../public/shot.png'
import Img2 from '../../public/diamond.png'
import Img3 from '../../public/network.png'
import Img4 from '../../public/eye.png'
import Image from 'next/image'

const Introducation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        MONA MEDIA
      </div>
      <div className={styles.title}></div>
      <div className={styles.image}>
        <Image src={Img1} 
          width={1200}
          height={300}
          alt='Not Found'/>
      </div>
      <div className={styles.content}>
        <div className={styles.concept}>
            <div className={styles.images}>
            <Image src={Img2} 
              width={30}
              height={30}
              alt='Not Found'/>
            </div>
            <div className={styles.header}>
          <h3>CONCEPT</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ad veritatis recusandae dolorum beatae quis sequi, 
              ratione facilis sint eaque ea nihil eum et vitae itaque facere quisquam molestiae?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis debitis eum! Voluptates ab, suscipit architecto explicabo culpa sed pariatur minus nostrum doloribus dicta sequi,
               omnis qui consectetur laudantium aliquid?</p>
               <p className={styles.click}>CLICK ME!</p>
          </div>
        </div>
        <div className={styles.network}>
        <div className={styles.images}>
            <Image src={Img3} 
              width={30}
              height={30}
              alt='Not Found'/>
            </div>
            <div className={styles.header}>
          <h3>NETWORK</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ad veritatis recusandae dolorum beatae quis sequi, 
              ratione facilis sint eaque ea nihil eum et vitae itaque facere quisquam molestiae?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis debitis eum! Voluptates ab, suscipit architecto explicabo culpa sed pariatur minus nostrum doloribus dicta sequi,
               omnis qui consectetur laudantium aliquid?</p>
               <p className={styles.click}>CLICK ME!</p>
          </div>
        </div>
        <div className={styles.eye}>
        <div className={styles.images}>
          <Image src={Img4} 
              width={30}
              height={30}
              alt='Not Found'/>
          </div>
          <div className={styles.header}>
          <h3>SEO</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ad veritatis recusandae dolorum beatae quis sequi, 
              ratione facilis sint eaque ea nihil eum et vitae itaque facere quisquam molestiae?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis debitis eum! Voluptates ab, suscipit architecto explicabo culpa sed pariatur minus nostrum doloribus dicta sequi,
               omnis qui consectetur laudantium aliquid?</p>
               <p className={styles.click}>CLICK ME!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introducation
