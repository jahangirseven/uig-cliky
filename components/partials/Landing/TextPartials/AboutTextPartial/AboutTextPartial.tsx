import React from 'react'
import styles from './AboutTextPartial.module.css'
import { Progress, Space } from 'antd';
import  textPartialImage  from './../../../../../assets/images/cliky_partial_image.png'
import Image from 'next/image';
import { Col, Row, Statistic } from 'antd';


function AboutTextPartial() {
  return (
    <section className={styles.text_partial}>
        <div className={`${styles.partial_limiter} textblock__item`}>
           <div className={styles.left_side}>
 
              <Image alt='img' src={textPartialImage}/>
             
           </div>

           <div className={styles.right_side}>
              
           <h3 className={styles.textpartial_badge_heading}>Powerful manaagement app</h3>
              <h2 className={styles.textpartial_heading}>Automate Tasks with Ease</h2>
              <p  className={styles.textpartial_description}>
                 Simplify your workflow and boost productivity with our powerful SaaS platform. Automate tasks and efficiently manage 
                 your processes with ease. Experience streamlined operations and achieve optimal results.
             </p>
                 <div>
                   <Progress type="circle" percent={93} strokeColor='#5dff81' style={{marginRight : 15}} />
                   <Progress type="circle" percent={91} strokeColor='#ff9535' style={{marginRight : 15}}/>
                   <Progress type="circle" percent={97} strokeColor='#a45dff'  />

                 </div>
           </div>
        </div>
    </section>
  )
}

export default AboutTextPartial