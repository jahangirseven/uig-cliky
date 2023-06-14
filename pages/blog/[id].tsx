import React from 'react'
import SecondaryLayout from '@/components/Layouts/SecondaryLayout/SecondaryLayout'
import BannerThumbnail from '@/components/blocks/AboutBanner/BannerThumbnail'
import SubscriptionBox from '@/components/UI/SubscriptionBox/SubscriptionBox'
import styles from './blog.module.css'
import { singlePost } from '@/data/single_post'
function SinglePostPage() {
  return (
    <SecondaryLayout pageTitle={`${singlePost.title}`}>
        <BannerThumbnail 
          title={`${singlePost.title}`}
          bg_image='https://lockthemes.com/competo/wp-content/uploads/sites/11/2022/08/cpt-video-layer-2.jpg'
        />
    
        <div className='page__limiter'> 
        <div className={styles.post_meta}>
            <div className={styles.meta_leftSlot}>
              <span className={styles.meta_author}>
                  <img src={singlePost.author.avatar} />
                  <span>{singlePost.author.name}</span>
              </span>

              <span className={styles.meta_date}>{singlePost.date}</span>
            </div>

            <div className={styles.meta_rightSlot}>
              {
                singlePost.categories.map(category=>{
                  return <span className={styles.single_category}>{category}</span>
                })
              }
                
            </div>
        </div>

            <div className='singlepost_page__postcontent'>
 

<div dangerouslySetInnerHTML={{ __html: singlePost.content }} />

            </div>
<SubscriptionBox/>
        </div>

    </SecondaryLayout>
  )
}

export default SinglePostPage