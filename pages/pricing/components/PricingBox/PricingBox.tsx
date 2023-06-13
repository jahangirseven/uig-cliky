import React from 'react'
import styles from './PricingBox.module.css'
import {CheckCircleOutlined} from '@ant-design/icons'
import { Button } from 'antd'
 
interface  pricingBoxProps{
    planName : string , 
    price : number , 
    description?  : string ,
    featureList : any , 
    planType : string

}
function PricingBox({planName , price , description , featureList , planType} : pricingBoxProps) {
  return (
    <div className={`${styles.pricing_box} pricing_box`}>
        <div>
            <h4 className={styles.plan_name}>{planName}</h4>
            <h1 className={styles.price_self}>{`$${price}`} <span>/ {planType}</span></h1>
            <p className={styles.description}>{description}</p>

        </div>

 
        <ul className={styles.content__list}>
            {
                featureList.map((feature:any)=>{
                    return            <li><CheckCircleOutlined />
                    {feature}
                </li>
                })
            }
  
 
        </ul>

        <Button type='primary' className='br-2'>Select this plan</Button>
    </div>
  )
}

export default PricingBox