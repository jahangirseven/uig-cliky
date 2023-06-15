import React from 'react'
import styles from './tabcontents.module.css'
import Image from 'next/image'
import { Button } from 'antd'
import tab_image from './../../../../public/images/tab_images/image_02.png'
function FirstContent() {
  return (
<div className={`${styles.tabcontent_wrapper}`}>
           <div className={`${styles.tabcontent__self}  tabcontent__self`}>
              <div className={`${styles.tabcontent__left} tabcontent__image`}>
                  <Image alt='image' 	fill={true} src={tab_image}/>
              </div>
              
              <div className={styles.tabcontent__right}>
                  <h1>Customizable Templates</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  </p>

                  <Button type='primary' className='btn-standard br-2' size='large'>Read more</Button>
              </div> 
           </div>
    </div>
  )
}

export default FirstContent