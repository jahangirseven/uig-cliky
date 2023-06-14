import React from 'react'
import field_image from './../../../../../assets/images/about_entry_photo.png'
import Image from 'next/image'
import styles from './TextBlockFirst.module.css'
import { Statistic } from 'antd';


function TextBlockFirst() {
 

  return (
    <section className={styles.text_partial}>
    <div className={`${styles.partial_limiter} textblock__item`}>
       <div className={styles.left_side}>

          <Image alt='img' src={field_image}/>
         
       </div>

       <div className={styles.right_side}>
          
       <h3 className={styles.textpartial_badge_heading}>Modern automation</h3>
          <h2 className={styles.textpartial_heading}>Automate Your Workflow and Boost Productivity</h2>
          <p  className={styles.textpartial_description}>

            Are you searching for a powerful workflow automation solution to streamline and enhance your business operations? As a leading SaaS provider in the industry, Click offers a specially designed workflow automation platform to simplify and optimize your processes.
            No longer do you have to deal with time-consuming and repetitive tasks. 
          </p> 

          <div className={styles.stats_num}>
          <Statistic className={styles.number_counter} title="Active Users" value={15000}  suffix='+'/>
          <Statistic className={styles.number_counter} title="Downloads" value={50000}  suffix='+'/>
          <Statistic className={styles.number_counter} title="Partner companies" value={130}  suffix='+'/>

          </div>


             <div>

             </div>
       </div>

    </div>
 </section>
  )
}

export default TextBlockFirst