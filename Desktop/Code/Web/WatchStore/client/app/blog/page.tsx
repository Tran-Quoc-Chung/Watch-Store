import React from 'react'
import styles from './blog.module.css'
import Img1 from '../../public/slide1.jpg'
import Img2 from '../../public/xcongDungTPCN.jpg'
import Img3 from '../../public/admin.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>TIN TỨC</h1>
          <h2>Mauris tristique pretium tempus. Vestibulum et accumsan magna.</h2>
          <div className={styles.title}></div>
          <h3>ĐĂNG LÚC <div className={styles.h3}> 8 THÁNG BA, 2018 </div> BỞI <div className={styles.h3}> ADMIN </div></h3>
          <div className={styles.image}>
            <Image src={Img1} 
              width={903}
              height={420}
              alt='Not Found'/>
          </div>
          <p>Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum. Sed nisi massa, ultrices sed pretium et, varius et 
            massa. Maecenas maximus ligula ante, at vulputate arcu consectetur quis. Duis interdum, eros a malesuada elementum, enim nulla 
            volutpat magna, sit amet tincidunt odio sapien in nibh. Vestibulum volutpat sapien ligula, sit amet tincidunt orci luctus quis. 
            Pellentesque sed egestas nisi. In vel magna tempor, vestibulum augue quis, suscipit risus. Pellentesque pellentesque aliquet 
            viverra. Aenean vestibulum est pellentesque tristique fringilla. Mauris consequat, nisi aliquam pretium mollis, elit magna commodo 
            orci, in ornare leo ex in arcu. Etiam dictum diam purus, eu sodales sapien consequat ut.
            <br />
            <br />
            In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a egestas. Aenean euismod mauris quis velit 
            ullamcorper, nec interdum leo pellentesque. Fusce quis est eu est iaculis ultricies sit amet nec lacus. Ut egestas ex id lacus 
            efficitur, eget semper sem suscipit. Morbi posuere sit amet ante at laoreet. Phasellus ornare facilisis nibh at bibendum. Maecenas
            nulla magna, tincidunt ac mollis eu, fringilla eu massa. Fusce diam libero, vehicula sit amet pharetra volutpat, molestie non ante.
            Sed vehicula dolor tellus, id bibendum magna molestie vitae. In nec tortor elementum, lacinia mauris eu, volutpat tellus.</p>
            <div className={styles.image}>
            <Image src={Img2} 
              width={903}
              height={420}
              alt='Not Found'/>
            </div>
          <p>Aliquam placerat nisl nec imperdiet vehicula. Phasellus tempus ligula id orci finibus feugiat. Sed luctus placerat turpis 
            vitae feugiat. Phasellus egestas ut elit varius tincidunt. Proin facilisis facilisis odio vel molestie. Mauris arcu nisi, placerat 
            ut ullamcorper sed, volutpat id erat. Praesent pretium accumsan ex, ut vulputate orci elementum sit amet. Ut euismod orci eu 
            ultrices condimentum. Praesent id nisl vehicula erat luctus pellentesque nec sit amet diam. In sed blandit ligula, gravida posuere 
            erat. In vitae dui sem. Fusce in lectus malesuada, scelerisque erat non, maximus mi. Aenean libero massa, volutpat id mauris at, 
            iaculis porttitor velit. In feugiat eu massa nec tempus. In scelerisque auctor odio et lacinia.
          </p>
          <div className={styles.title2}></div>
          <div className={styles.icons}>
            <i className={styles.blue}>
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
            <i className={styles.blue}>
              <FontAwesomeIcon icon={faTwitter} />
            </i>
            <i className={styles.red}>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <i className={styles.red}>
              <FontAwesomeIcon icon={faPinterest} />
            </i>
            <i className={styles.red}>
              <FontAwesomeIcon icon={faGooglePlusG} />
            </i>
            <i className={styles.blue}>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </div>
          <div className={styles.link}>
            Nội dung được đăng tại <div className={styles.link1}>Tin tức</div>. Đánh dấu <div className={styles.link1}>đường dẫn</div>.
          </div>
          <div className={styles.admin}>
            <Image src={Img3} 
              width={100}
              height={100}
              alt='Not Found'/><p>ADMIN</p>
          </div>
        </div>
      </div>
      <div className={styles.rep}>
        <h1>Trả lời</h1>
        <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
      </div>
      <div className={styles.comment}>
        <h1>Bình luận</h1>
        <input type="text" id="comment" name="comment" required />
      </div>
      <div className={styles.feedback}>
        <form>
            <label htmlFor="name">Tên *</label>
            <label className={styles.email} htmlFor="email">Email *</label>
            <label className={styles.web} htmlFor="web">Trang web</label>

            <br />

            <input className={styles.name} type="text" id="name" name="name" required />
            <input type="email" id="email" name="email" required />
            <input type="text" id="web" name="web" required />

            <br />
          <button type="submit">PHẢN HỒI</button>
        </form>
      </div>
    </div>
  )
}

export default Blog
