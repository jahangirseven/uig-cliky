import React from 'react'
import styles from './SinglePostBlock.module.css' 
import Image from 'next/image'
import { getRandomColor } from '@/common/utils/helpers'
import Link from 'next/link'

interface SinglePostBlockProps{
    thumbnail : string , 
    title : string , 
    categoryList : string[] ,
    content : string , 
    postMeta : {
        author : {
            thumbnail : string , 
            name : string
        } , 
        publishDate : string
    }
}
function SinglePostBlock({thumbnail , title , categoryList, content , postMeta} : SinglePostBlockProps) {
    return( 
 

<div className={`${styles.single_blogpost} single_blogpost `}>
        <div className={styles.post_thumbnail}>
             <Image width={350} height={200}  src={thumbnail} alt="img"/>
        </div>

        <div className={styles.postblock_content}>

         <span className={styles.post_categories}>
            {
                categoryList.map(category=>{
                    return(

                        <span style={{backgroundColor:getRandomColor()}}>{category}</span>
                    )
                })
            }
         </span>


         <h2 className={styles.post_title}><Link href='/blog/1'>{title}</Link> </h2>

         <p className={styles.post_description}>{content}</p>
        
         <div className={styles.postblock_meta}>
             <span className={styles.meta_author}>
                <Image width={40} height={40} src={postMeta.author.thumbnail} />
                <span>{postMeta.author.name}</span>
             </span>

             <span className={styles.meta_date}>
                    {postMeta.publishDate}
             </span>
         </div>

        </div>
    </div>
  )
}

export default SinglePostBlock