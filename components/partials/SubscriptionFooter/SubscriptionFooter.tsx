import React from 'react'
import { Button } from 'antd'
import styles from './SubscriptionFooter.module.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import Link from 'next/link'
function SubscriptionFooter() {
  return (
    <section className={styles.subscription__footer}> 
     <h1 className='section_heading_text'>Ready to start with us ?</h1>
     <p className='section_description_text'>
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br></br>deserunt mollit anim id est laborum consequat.
     </p>
     <Button size='large' className='br-2 btn-standard' type='primary' ><Link href='/contact'>Contact us</Link> </Button>

     <div className={styles.footer_extras}>
         <span>
          <AiFillCheckCircle />
          High quality service
         </span>

           <span>
          <AiFillCheckCircle />
           24/7 Customer support
          </span>

          <span>
          <AiFillCheckCircle />
          Lifetime free updates
         </span>
     </div>
    </section>
  )
}

export default SubscriptionFooter