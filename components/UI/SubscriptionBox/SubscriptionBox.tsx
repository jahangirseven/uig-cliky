import React from 'react'
import styles from './SubscriptionBox.module.css'
import { Input , Button } from 'antd';

function SubscriptionBox() {
  return (
    <div className={styles.subscription_box}>
      <div className={styles.subscription_box__self}>
          <div className={styles.left_slot}>
                <h1>Stay in the loop</h1>
                <p>Join our newsletter to get top news before anyone else.</p>
          </div>

          <div className={styles.right_slot}>
               <form onSubmit={e=>e.preventDefault()}>
                   <Input placeholder="Basic usage"  className='br-2 input__dark' size='large'/>
                   <Button  style={{ marginLeft: 8 }} className='br-2 button__light' size='large'>Subcribe</Button>
               </form>
          </div>

        </div>
    </div>
  )
}

export default SubscriptionBox