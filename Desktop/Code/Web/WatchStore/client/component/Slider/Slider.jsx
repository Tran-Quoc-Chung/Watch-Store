'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from "../../public/slide1.jpg";
import slide2 from "../../public/slide2.jpg";
import slide3 from "../../public/slide3.jpg";
import styles from "./slider.module.css";
import Image from 'next/image'

const Slider = () => {
    return (
            <Carousel
                 showArrows={false}
                 infiniteLoop={true}
                 dynamicHeight={false}
                stopOnHover={true}
                autoPlay={true}
                interval={4000}
                emulateTouch={true}
                className={styles.container}
            >
                <div>
                <Image src={slide1} />
                </div>
                <div>
                <Image src={slide2} />
                </div>
                <div>
                <Image src={slide3} />
                </div>
            </Carousel>
    );
}

export default Slider;
