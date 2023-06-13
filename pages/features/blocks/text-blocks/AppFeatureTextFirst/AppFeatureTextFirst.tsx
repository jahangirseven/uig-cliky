import React from 'react'
import styles from './AppFeatureTextFirst.module.css'
import Image from 'next/image'
import field_image from './../../../../../assets/images/app_images/app_single_image01.png'
import { Button } from 'antd'
import {Progress} from 'antd'
function AppFeatureTextFirst() {
  return (
    <section className={styles.text_partial}>
    <div className={styles.partial_limiter}>
       <div className={styles.left_side}>

          <Image alt='img' src={field_image}/>
         
       </div>

       <div className={styles.right_side}>
          
       <h3 className={styles.textpartial_badge_heading}>Modern automation</h3>
            <h2 className={styles.textpartial_heading}>Workflow Automation</h2>
            <p  className={styles.textpartial_description}>
              Our innovative solution empowers businesses with advanced workflow automation, streamlining processes and increasing efficiency. Experience seamless task management, real-time collaboration, and improved productivity like never before.
            </p> 

            <Progress percent={97} />
            <Progress percent={94} strokeColor='#ff8b00'/>
            <Progress percent={92} strokeColor='#53e367'/>
            <Progress percent={90} strokeColor='#ff2728'/>
             <div>

             </div>
       </div>
    </div>
</section>
  )
}

export default AppFeatureTextFirst