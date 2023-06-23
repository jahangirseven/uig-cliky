import React from 'react'
import styles from './AboutTextPartialSecond.module.css'
import { Progress, Space } from 'antd';
import  textPartialImage  from './../../../../../assets/images/cliky_partial_image_2.png'
import Image from 'next/image';
import { Timeline } from 'antd';

function AboutTextPartialSecond() {
  return (
    <>
         
    <section className={`${styles.text_partial} normalize__padding`}>
    <div className={`${styles.partial_limiter} textblock__item`}>
       <div className={styles.left_side}>

          <Image alt='img' src={textPartialImage}/>
         
       </div>

       <div className={styles.right_side}>
          
       <h3 className={styles.textpartial_badge_heading}>Let's start with cliky</h3>
          <h2 className={`${styles.textpartial_heading} textpartial_heading `}>Say hello to research data</h2>

          <p  className={styles.textpartial_description}>
                Maecenas efficitur turpis turpis, sit amet sagittis nunc tristique ut. Proin sed venenatis
                justo. Fusce a tortor quis lacus ultrices cursus at et mauris. In quis orci condimentum, 
                tempor dolor et, imperdiet sapien. Nunc eget tellus id ipsum cursus molestie eget id nulla.
          </p>
          <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
       </div>
    </div>
</section>
    </>
  )
}

export default AboutTextPartialSecond