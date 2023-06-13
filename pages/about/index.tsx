import React from 'react'
import SecondaryLayout from '@/components/Layouts/SecondaryLayout/SecondaryLayout'
import BannerThumbnail from '../../components/blocks/AboutBanner/BannerThumbnail'
import TextBlockFirst from './blocks/text-blocks/TextBlockFirst/TextBlockFirst'
import TextBlockSecond from './blocks/text-blocks/TextBlockSecond/TextBlockSecond'
import SubscriptionBox from '@/components/UI/SubscriptionBox/SubscriptionBox'
import TeamBlock from './blocks/TeamBlock/TeamBlock'
import BlogPostsSection from '@/components/partials/Landing/BlogPostsSection/BlogPostsSection'
 
function index() {
 
  return (
     <SecondaryLayout pageTitle='About us'>
           <BannerThumbnail 
             title='About us'
             description="Get in touch with us today. We're here to assist you."
             bg_image='https://lockthemes.com/competo/wp-content/uploads/sites/11/2022/08/cpt-video-layer-2.jpg'
           />   
           <div className='page__limiter'>

               <TextBlockFirst />
               <TextBlockSecond />

              <span className='divider_line'></span>
                
                <TeamBlock />


            <BlogPostsSection />
            <SubscriptionBox />
           </div>
      </SecondaryLayout>
  )
}

export default index