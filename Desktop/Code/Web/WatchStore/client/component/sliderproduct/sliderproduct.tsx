'use client'
import React from 'react'
import styles from './sliderproduct.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
function SliderProduct( props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className={styles.container} >
            <Carousel
                responsive={responsive}
            >
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
            </Carousel>
        </div>
    )
}

export default SliderProduct
