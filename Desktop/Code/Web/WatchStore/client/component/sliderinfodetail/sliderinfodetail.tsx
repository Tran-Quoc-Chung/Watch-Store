'use client'
import React from 'react'
import styles from './sliderinfodetail.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
function SliderInfoDetail( props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.images}>
                        <Image
                            src={props.src}
                            width={408}
                            height={213}
                            alt='Not found'
                        />
                    </div>
                    <div className={styles.desc}>
                        
                        
                        <a href='#'>ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</a>
                        <p className={styles.price}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed dapibus, massa non viverra consequat, tellus ligula scelerisque nisi, at viverra erat risus ut orci.
                            Morbi odio lacus, pellentesque ut tincidunt et, hendrerit sed nisi. Aliquam ac urna nisi.
                            Pellentesque interdum libero id lectus venenatis sagittis. Nam ac gravida turpis. Aliquam diam lacus,</p>
                    </div>
                </div>


            </Carousel>
        </div>
    )
}

export default SliderInfoDetail
