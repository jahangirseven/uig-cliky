import React from 'react'
import styles from './BannerThumbnail.module.css'

interface  BannerProps{
    bg_image? : string  , 
    title? : string , 
    description? : string
}
function  BannerThumbnail({bg_image , title ,description} : BannerProps) {

    const style = {
        "background-image" : `url(${bg_image})`
    }

  return (
    <section className={styles.banner} style={style}>
       <div className={styles.content_limiter}>
            <h1 className='page__entry_title'>{title}</h1>
            <p className='page__entry_desc'>{description}</p>
       </div>
    </section>
  )
}

export default BannerThumbnail  