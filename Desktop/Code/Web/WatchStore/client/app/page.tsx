'use client'
import Image from 'next/image'
import Slider from '../component/Slider/Slider'
import styles from "./page.module.css"
import ListProduct from '@/component/ListProduct/listproduct';
import product1 from '../public/dong-ho-tissot-t41.1.183.34-nu-tu-dong-day-inox-600x600.jpg'
import product2 from '../../client/public/13900AA05.BDC102-600x600.jpg';
import product3 from '../public/couplewatch.jpg'
import Criteria from '@/component/Criteria/criteria';
import Content from '@/component/content/content';
import CoupleWatch from '@/component/couplewatch/couplewatch';

export default function Home() {

  return (
    <div className={styles.container}>
      <Slider />
      <ListProduct title="Đồng hồ nam" src={product2} />
      <Criteria/>
      <ListProduct title="Đồng hồ nữ" src={product1} />
      <Content />
      <CoupleWatch title="Đồng hồ đôi" src={ product3} />
    </div>
  )
}
