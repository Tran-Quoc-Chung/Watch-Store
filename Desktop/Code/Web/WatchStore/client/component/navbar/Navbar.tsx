'use client'
import React from 'react'
import styles from './navbar.module.css'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { faMagnifyingGlass,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'


const Navbar = () => {
    const currentPage = usePathname();  
    const [homepage,setHomepage]=React.useState(false)
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0 && currentPage ) {
            setScrolled(true);//show
            setHomepage(false)
        } else  if(window.scrollY === 0 && currentPage==='/'){
            setScrolled(false);
            setHomepage(true);

        }else if(!currentPage && window.scrollY === 0  ) {
            setHomepage(false);
            setScrolled(false)
        }
    };
    React.useEffect(() => {
        if (currentPage === '/') {
            
            setHomepage(true)
        } else {
            setHomepage(false)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className= {` ${homepage ? styles.homepage : ''} ${styles.container} ${ scrolled ? styles.scrolled : ''} `}>
            <div className={styles.navlogo} >
                <a href='/'>
                <Image
                        src={logo}
                        width={150}
                        height={55}
                        alt="Logo not found"
                    />
                    </a>
            </div>
            <div className={styles.navtitle}>
                <ul >
                    <li>
                        <a href='/introducation'>
                            <span className={styles.border_right}>Giới thiệu</span>
                        </a>
                    </li>
                    <li>
                        <a href='/menwatch'>
                            <span className={styles.border_right}>Đồng hồ nam</span>
                        </a>
                    </li>
                    <li>
                        <a href='/womenwatch'>
                            <span className={styles.border_right}>Đồng hồ nữ</span>
                        </a>
                    </li>
                    <li>
                        <a href='/couplewatch'>
                            <span className={styles.border_right}>Đồng hồ đôi</span>
                        </a>
                    </li>
                    <li>
                        <a href='/accessory'>
                            <span className={styles.border_right}>Phụ kiện</span>
                        </a>
                    </li>
                    <li>
                        <a href='/blog'>
                            <span className={styles.border_right}>Tin tức</span>
                        </a>
                    </li>
                    <li>
                        <a href='/contact'>
                            <span >Liên hệ</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.navicon}>
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                    </li>
                    <li >
                    <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCartShopping} />                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
