'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import product from '../../../public/dong-ho-tissot-t41.1.183.34-nu-tu-dong-day-inox-600x600.jpg'
import product2 from '../../../public/couplewatch.jpg'
import blog from '../../../public/slide2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactStars from "react-rating-stars-component";
import SliderProduct from '@/component/sliderproduct/sliderproduct'
import RelateProduct from '@/component/relateproduct/relateproduct'

const SingleProduct = () => {
  let [star, setStar] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.extra}>
        <RelateProduct title={"sản phẩm"} src={ product2} />
        <RelateProduct title={"bài viết liên quan"} src={ blog} />
      </div>
      <div className={styles.product}>
        <div className={styles.desc}>
          <div className={styles.image}>
            <Image
              src={product}
              width={400}
              height={400}
              alt='not found'
            />
          </div>
          <div className={styles.info}>
            <h5>Trang chủ / đồng hồ nữ</h5>
            <h2 >ĐỒNG HỒ TISSOT T41.1.183.34 NỮ TỰ ĐỘNG DÂY INOX</h2>
            <span> </span>
            <h2>17,640,000 ₫</h2>

            <p className={styles.pdesc}>
              Mẫu Tissot T41.1.183.34 vẻ ngoài giản dị của chiếc đồng hồ 3 kim nhưng lại khoác lên sự trang nhã với nền
              mặt số được phối tông màu trắng trước bề mặt kính Sapphire kết hợp cùng tổng thể chiếc đồng hồ kim loại màu bạc đầy
              sang trọng.
            </p>
            <div className={styles.quantity}>
              <p>Số lượng:</p>
              <input type='number' step={1} min={1} max={999} size={4} defaultValue={1}></input>
              <button>Thêm vào giỏ</button>
            </div>
            <p className={styles.idproduct}>Mã: T41.1.183.34</p>
            <p className={styles.idproduct}>Danh mục: Đồng hồ nữ</p>
          </div>
        </div>
        <div className={styles.tabdesc}>
          <Tabs defaultIndex={0} >
            <TabList>
              <Tab style={{ color: "#453030", fontSize: "15px", fontWeight: "bolder" }}>THÔNG TIN BỔ SUNG</Tab>
              <Tab style={{ color: "#453030", fontSize: "15px", fontWeight: "bolder" }}>ĐÁNH GIÁ</Tab>
              <Tab style={{ color: "#453030", fontSize: "15px", fontWeight: "bolder" }}>CHÍNH SÁCH BẢO HÀNH</Tab>
            </TabList>
            <TabPanel>
              <div className={styles.infoproduct}>
                <table className={styles.table}>
                  <tbody><tr>
                    <th>Bộ máy &amp; Năng lượng</th>
                    <td>Cơ (Automatic)</td>
                  </tr>
                    <tr>
                      <th>Chất liệu dây</th>
                      <td>Dây Kim Loại</td>
                    </tr>
                    <tr>
                      <th>Chất liệu mặt kính</th>
                      <td>Kính Sapphire</td>
                    </tr>
                    <tr>
                      <th>Giới tính</th>
                      <td>Nữ</td>
                    </tr>
                    <tr>
                      <th>Hình dạng mặt số</th>
                      <td>Tròn </td>
                    </tr>
                    <tr>
                      <th>Kích thước mặt số</th>
                      <td>29 mm</td>
                    </tr>
                    <tr>
                      <th>Màu mặt số</th>
                      <td>Trắng</td>
                    </tr>
                    <tr>
                      <th>Mức chống nước</th>
                      <td>Đi Mưa Nhỏ (3 ATM) </td>
                    </tr>
                    <tr>
                      <th>Thương hiệu</th>
                      <td>Tissot</td>
                    </tr>
                    <tr>
                      <th>Xuất xứ</th>
                      <td>Thụy Sĩ</td>
                    </tr>
                  </tbody></table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.rating}>
                <div className={styles.comment}>
                  <div className={styles.singlecomment}>
                    <div className={styles.userinfo}>
                      <div className={styles.ratinginfo}>
                        <p>User 1</p>
                        <p>22:45 16/8/2023</p>
                      </div>
                      <div className={styles.countstar}>
                        <ReactStars
                          count={5}
                          onChange={setStar}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.textcontent}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic debitis saepe perferendis explicabo veniam enim labore maiores corrupti quod, dignissimos
                      </div>
                      <div className={styles.imgcontent}>
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.singlecomment}>
                    <div className={styles.userinfo}>
                      <div className={styles.ratinginfo}>
                        <p>User 1</p>
                        <p>22:45 16/8/2023</p>
                      </div>
                      <div className={styles.countstar}>
                        <ReactStars
                          count={5}
                          onChange={setStar}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.textcontent}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic debitis saepe perferendis explicabo veniam enim labore maiores corrupti quod, dignissimos
                      </div>
                      <div className={styles.imgcontent}>
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.singlecomment}>
                    <div className={styles.userinfo}>
                      <div className={styles.ratinginfo}>
                        <p>User 1</p>
                        <p>22:45 16/8/2023</p>
                      </div>
                      <div className={styles.countstar}>
                        <ReactStars
                          count={5}
                          onChange={setStar}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.textcontent}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic debitis saepe perferendis explicabo veniam enim labore maiores corrupti quod, dignissimos
                      </div>
                      <div className={styles.imgcontent}>
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.singlecomment}>
                    <div className={styles.userinfo}>
                      <div className={styles.ratinginfo}>
                        <p>User 1</p>
                        <p>22:45 16/8/2023</p>
                      </div>
                      <div className={styles.countstar}>
                        <ReactStars
                          count={5}
                          onChange={setStar}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.textcontent}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic debitis saepe perferendis explicabo veniam enim labore maiores corrupti quod, dignissimos
                      </div>
                      <div className={styles.imgcontent}>
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                        <Image
                          src={product}
                          width={60}
                          height={60}
                          alt='not found'

                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div className={styles.post}>

                  <textarea
                    placeholder="Nhập bình luận của bạn..." />
                  <input type="file" accept="image/*" />

                  <button >Đăng bình luận</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.warranty}>
                <p>Chính sách bảo hành của riêng mỗi hãng:</p>
                <p>CASIO: Bảo hành chính hãng máy 1 năm, pin 1,5 năm</p>
                <p>CITIZEN: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
                <p>SEIKO: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
                <p>ORIENT: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
                <p>OP: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
                <p>RHYTHM:&nbsp;Bảo hành chính hãng máy 1 năm, pin 1 năm</p>
                <p>OGIVAL:&nbsp;Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
                <p>ELLE:&nbsp;Bảo hành chính hãng máy 2 năm, pin 2 năm</p>
                <p>TISSOT:&nbsp;Bảo hành chính hãng máy 2 năm, pin 1 năm</p>			</div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className={styles.sameproduct}>
        <div className={styles.title}>
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className={styles.slider}>
            <SliderProduct src={ product} />
        </div>
      </div>
      
    </div>
  )
}

export default SingleProduct
