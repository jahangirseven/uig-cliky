import React from 'react'
import styles from './TextBlockSecond.module.css'
import field_image from './../../../../../assets/images/about_entry_photo2.png'
import Image from 'next/image'
import { Button } from 'antd'
function TextBlockSecond() {
  return (
    <section className={styles.text_partial}>
    <div className={`${styles.partial_limiter} textblock__item`}>
       <div className={styles.left_side}>
       <h3 className={styles.textpartial_badge_heading}>Modern automation</h3>
          <h2 className={styles.textpartial_heading}>Optimize Workflow for Enhanced Productivity.</h2>
          <p  className={styles.textpartial_description}>
          Are you searching for a powerful workflow automation solution to streamline and enhance your business operations? As a leading SaaS provider in the industry, Click offers a specially designed workflow automation platform to simplify and optimize your processes.
          </p>
          <Button type='primary' className='br-2 btn-standard' size='large' style={{alignSelf:'flex-start',marginTop:20}}>Learn more</Button> 
         
       </div>

       <div className={styles.right_side}>
          <Image alt='img' src={field_image}/>
          
 
             <div>

             </div>
       </div>

    </div>
 </section>
  )
}

export default TextBlockSecond