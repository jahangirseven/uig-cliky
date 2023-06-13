import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import PricingBlock from './blocks/PricingBlock/PricingBlock'
 import SubscriptionFooter from '@/components/partials/SubscriptionFooter/SubscriptionFooter'
function index() {
  return (
    <MainLayout pageTitle='Pricing plans'>
         <section className='page__container'>
         <BoxedHeading style='rounded' title='Pricing plans' bgColor='orange' textColor='#fff'/>

            <h1 className='section_heading_text'>
             Fair pricing plans for everyone
            </h1>
             <p className='page__entry_desc'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br>
                eserunt mollit laborum — semper quis lectus nulla.        
             </p>
      
            <PricingBlock />

            <SubscriptionFooter />
         </section>
    </MainLayout>
  )
}

export default index