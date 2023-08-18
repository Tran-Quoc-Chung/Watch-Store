'use client'
import React from 'react'
import styles from './category.module.css'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'

const Category = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>Danh mục sản phẩm</h4>
                </div>
                <div className={`${isOpen ? styles.toogleopen : ''} ${styles.listcategory}`}>
                    <ul >
                        <li className={styles.listmenu}>Đồng hồ nam</li>
                        <li className={styles.listmenu}>Đồng hồ nữ</li>
                        <li className={styles.listmenu}>Đồng hồ đôi</li>
                        <li className={styles.listmenu}> Phụ kiện
                            <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </button>
                            <ul className={`${isOpen ? styles.listdetail : ''} ${styles.menutoogle}`}>
                                <li>Dây Da Hirsch</li>
                                <li>Dây Da ZRC</li>
                                <li>Hộp Đồng Hồ</li>
                                <li>D.Vụ In Logo Lên Đồng Hồ</li>
                                <li>Khắc Laser Lên Đồng Hồ</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>Thương hiệu</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Citizen</li>
                        <li className={styles.listmenu}>Louis Erard</li>
                        <li className={styles.listmenu}>Olym Pianus - Olympia Star</li>
                        <li className={styles.listmenu}>Seiko</li>
                        <li className={styles.listmenu}>Tissot</li>

                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>Giới tính</h4>
                </div>
                <div className={styles.filterprice}>
                    <input type='range' />
                    <div className={styles.filterpricedetail}>
                        <button>Lọc</button>
                        <h5>Giá: </h5>
                        <h5>3,684,000 ₫ — 21,940,000</h5>

                    </div>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>Lọc theo giá</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Nam</li>

                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>Chất liệu dây</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Dây Da</li>
                        <li className={styles.listmenu}>Dây Kim Loại</li>
                        <li className={styles.listmenu}>Dây Nhựa / Cao Su</li>
                        <li className={styles.listmenu}>Dây Vải</li>

                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>CHẤT LIỆU MẶT KÍNH</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Kính Cứng</li>
                        <li className={styles.listmenu}>Kính Sapphire</li>
                    </ul>
                </div>
            </div>

            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>BỘ MÁY & NĂNG LƯỢNG</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Kinetic (Vừa Pin - Vừa Tự Động)</li>
                        <li className={styles.listmenu}>Năng Lượng Ánh Sáng</li>
                        <li className={styles.listmenu}>Pin (Quartz)</li>
                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>MÀU MẶT SỐ</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Bạc</li>
                        <li className={styles.listmenu}>Đen</li>
                        <li className={styles.listmenu}>Trắng</li>
                        <li className={styles.listmenu}>Vàng</li>
                        <li className={styles.listmenu}>Xanh</li>
                       
                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>HÌNH DẠNG MẶT SỐ</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}>Chữ nhật</li>
                        <li className={styles.listmenu}>Tròn</li>
                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>KÍCH THƯỚC MẶT SỐ</h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}> &lt; 44mm</li>
                        <li className={styles.listmenu}>30 - 34 mm</li>
                        <li className={styles.listmenu}>35 - 39 mm</li>
                        <li className={styles.listmenu}>40 - 43 mm</li>
                    </ul>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.titlecategory}>
                    <h4>MỨC CHỐNG NƯỚC </h4>
                </div>
                <div className={styles.listcategory}>
                    <ul >
                        <li className={styles.listmenu}> Đi Bơi (10 ATM)</li>
                        <li className={styles.listmenu}>Đi Mưa Nhỏ (3 ATM)</li>
                        <li className={styles.listmenu}>Đi Tắm (5 ATM)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category
