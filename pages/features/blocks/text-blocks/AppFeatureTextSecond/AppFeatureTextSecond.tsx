import React from 'react'
import styles from './AppFeatureTextSecond.module.css'
import Image from 'next/image'
import field_image2 from './../../../../../assets/images/app_images/app_image_02.png'
import { Button } from 'antd'

function AppFeatureTextSecond() {
  return (
    <section className={styles.text_partial}>
    <div className={styles.partial_limiter}>
       <div className={styles.left_side}>
       <h3 className={styles.textpartial_badge_heading}>Hİgh performance</h3>
       <h2 className={styles.textpartial_heading}> Customizable templates</h2>
          <p  className={styles.textpartial_description}>
          Tailor your workflows to fit your unique business needs with our customizable workflow templates. From project management to approvals and beyond, our solution offers a wide range of templates that can be easily adapted to match your organization's specific requirements.
          </p>
          <Button type='primary' size='large' className='br-2 btn-standard' style={{alignSelf : 'flex-start'}}>Read more</Button>
           
       </div>

       <div className={styles.right_side}>
       <Image alt='img' src={field_image2}/>

  
       </div>
    </div>
</section>  )
}

export default AppFeatureTextSecond