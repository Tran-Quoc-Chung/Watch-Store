import React from 'react'
import styles from './relateproduct.module.css'
import Image from 'next/image'
import product from '../../public/couplewatch.jpg'
const RelateProduct = (props) => {
    return (
        <div className={styles.container} >
            <div className={styles.title}>
                <h4>{props.title}</h4>
                <span></span>
            </div>
            <div className={styles.listproduct}>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={60}
                            height={60}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelateProduct
