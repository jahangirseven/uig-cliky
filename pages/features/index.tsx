import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import Image from 'next/image'
import NumberStats from './components/NumberStats/NumberStats'
import AppFeatureTextFirst from './blocks/text-blocks/AppFeatureTextFirst/AppFeatureTextFirst'
import AppFeatureTextSecond from './blocks/text-blocks/AppFeatureTextSecond/AppFeatureTextSecond'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import  app_image_01  from './../../assets/images/app_images/app_image_01.png'
import Features from './blocks/Features/Features'
import SubscriptionFooter from '@/components/partials/SubscriptionFooter/SubscriptionFooter'
function index() {
  return (
     <MainLayout pageTitle='Featues'>
        <section className='page__container'>
             <BoxedHeading style='rounded' title='Features' bgColor='orange' textColor='#fff'/>
             <h1 className='page__entry_title'>Highlighting the Key Features of<br></br> our Innovative Solution</h1>
             <p className='page__entry_desc'>
             Welcome to a page highlighting the key features<br></br> of  our innovative solution  </p>
             <Image src={app_image_01}
                    alt="Description of the image"  
                    width={886}
                    height={560}
              />
                
            <span className='divider_line'></span>
            <NumberStats />
            <AppFeatureTextFirst />
            <AppFeatureTextSecond />
            <span className='divider_line'></span>
            <Features />
            <SubscriptionFooter />
        </section>
     </MainLayout>
  )
}

export default index