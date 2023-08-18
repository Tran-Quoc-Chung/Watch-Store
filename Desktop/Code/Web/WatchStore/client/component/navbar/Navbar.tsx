'use client'
import React from 'react'
import styles from './navbar.module.css'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { faMagnifyingGlass,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Modal from '../modal'
import RegisterModal from '../registerModal'
import ForgotPassModal from '../forgotpass'
import Link from 'next/link'


const Navbar = () => {
    const currentPage = usePathname();  

    const [homepage,setHomepage]=useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [showModal,setShowModal]=useState(false)
    const [showRegisterModal,setShowRegisterModal]=useState(false)
    const [showForgotPassModal,setShowForgotPassModal]=useState(false)

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
                    <li onClick={() => setShowModal(true)} >
                    <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCartShopping} />                    </li>
                </ul>
            </div>
            <div>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                <div className={styles.content}>
                    <div className={styles.account}>
                        <form>
                            <p>ĐĂNG NHẬP</p>
                            <label htmlFor="login">Tên tài khoản hoặc địa chỉ email *</label>
                            <br />
                            <input type="text" id="login" name="login" required />
                            <br />

                            <label htmlFor="pass">Mật khẩu *</label>
                            <br />
                            <input type="password" id="pass" name="pass" required />
                            <br />
                        </form>
                    </div>
                    <div className={styles.login}>
                        <button type="submit">ĐĂNG NHẬP</button>
                        <label><input type="checkbox" id="remember" name="remember" value="remember-me"></input> Ghi nhớ đăng nhập</label>
                    </div>
                    <div className={styles.register}>
                        <label onClick={() => setShowForgotPassModal(true)} htmlFor="forgot">Quên mật khẩu? *</label>
                        <label onClick={() => setShowRegisterModal(true)} htmlFor="register">Đăng ký *</label>
                    </div>
                </div>
            </Modal>
        }
        {/* PHẦN REGISTER MODAL */}
        {showRegisterModal &&
            <RegisterModal onClose={() => setShowRegisterModal(false)}>
                <div className={styles.contentR}>
                    <div className={styles.registerR}>
                        <form>
                            <p>WATCH REGISTRATION FORM</p>
                                <label htmlFor="login">Tên tài khoản đăng ký *</label>
                                <input type="email" id="login" name="login" required />
                                 
                                <label htmlFor="username">Tên người dùng *</label>
                                <input type="text" id="username" name="username" required />

                                <label htmlFor="pass">Mật khẩu *</label>
                                <input type="pass" id="pass" name="pass" required />

                                <label htmlFor="confirmPass">Xác nhận Mật khẩu *</label>
                                <input type="password" id="confirmPass" name="confirmPass" required />

                                <div className={styles.login}>
                                <button type="submit">XÁC NHẬN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </RegisterModal>
        }
        {/* PHẦN FORGOT PASS MODAL */}
        {showForgotPassModal &&
            <ForgotPassModal onClose={() => setShowForgotPassModal(false)}>
                <div className={styles.containerP}>
                    <div className={styles.pass}>
                    <form>
                            <p>WATCH FORGOTPASS FORM</p>
                                <label htmlFor="login">Tên tài khoản hoặc địa chỉ email *</label>
                                <input type="text" id="login" name="login" required />
                                <br />

                                <label htmlFor="confirm">Nhập mã xác nhận *</label>
                                <input type="text" id="confirm" name="confirm" required />
                                <br />

                                <div className={styles.login}>
                                <button type="submit">XÁC NHẬN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ForgotPassModal>
        }
      </div>
        </div>
    )
}

export default Navbar
