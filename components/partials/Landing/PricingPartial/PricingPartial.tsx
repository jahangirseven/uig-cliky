import React from 'react'
import PricingBlock from '@/pages/pricing/blocks/PricingBlock/PricingBlock'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import styles from './PricingPartial.module.css'


function PricingPartial() {
  return (
    <section className={styles.pricing_partial} >
        <BoxedHeading title='Pricing plans' bgColor='orange' />
        <h1 className='section_heading_text'>Fair pricing for eveyone</h1>
        <p className='section_description_text' style={{marginBottom : 40}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br> deserunt mollit laborum — semper quis lectus nulla.</p>
        
        <PricingBlock />
   </section>
  )
}

export default PricingPartial