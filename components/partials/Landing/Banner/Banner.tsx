import React from 'react'
import { Button } from 'antd'
import VideoPlayer from '@/components/UI/VIdeoPlayer/VideoPlayer'
import styles from './Banner.module.css'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import Link from 'next/link'
function Banner() {
  return (
    <div className={styles.banner}>
          <div className={styles.banner_textcontent}>
            <BoxedHeading title='Let`s start your business now' bgColor='orange'/>
                <h1 className={styles.heading_text}> Unleash the Potential of Your Business with our Innovative Tools</h1>
                <p className={styles.banner_description}> 
                Power Your Business with our SaaS Platform. Streamline Workflows,<br></br> Drive Growth.  
                Gain Insights  for Informed Decision-Making.<br></br> Stay Ahead. Experience Trusted SaaS Solutions.
                </p>

                <div className='cover_buttons'>
                    <Button ghost size='large' className='br-2 btn-large btn'>
                      <Link href='/features'>Features</Link>
                    </Button>


                    <Button type='primary' size='large' className='br-2 btn-large btn'>
                        <Link href='/pricing'> Start now </Link>
                    </Button>
                </div>
          </div>

          <VideoPlayer 
            videoUrl='https://www.youtube.com/embed/SZEflIVnhH8' 
            posterUrl='https://lockthemes.com/berrafort/wp-content/uploads/sites/15/2023/03/itsolutinon-banner-1-1024x576.png'
         />


    </div>
  )
}

export default Banner