import React , {useState} from 'react'
import styles from './PickedPost.module.css'
import Image from 'next/image'
import { getRandomColor } from '@/common/utils/helpers'
import Link from 'next/link'
import picked_thumbnail from './../../../../public/images/blog/postblock_images/picked_post.png'
import author_thumbnail from './../../../../public/images/blog/post_authors/author_02.jpg'

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


function PickedPost() {
    const [postData , setPostData] = useState<SinglePostBlockProps>({
        thumbnail : picked_thumbnail.src,
        title : 'Boost Busiess Success' ,
        content : 'Maximize team productivity with proven task assignment techniques using our task management SaaS solution.',
        categoryList : ['IT', 'Blog', 'Startup'],
        postMeta : {
            author : {
                thumbnail : author_thumbnail.src , 
                name : 'Jahangir Seven'
            } , 
            publishDate : 'Jan 17, 2022',
    }});

  return (
    <div className={`${styles.pickedPost} pickedPost `}>
        <div className={styles.left_side}>
          <Image alt='Post thumbnail' width={550} height={400} src={postData.thumbnail} />
        </div>
     
        <div className={styles.right_side}>
        <span className={styles.post_categories}>
            {
                postData.categoryList.map(category=>{
                    return(

                        <span style={{backgroundColor:getRandomColor()}}>{category}</span>
                    )
                })
            }
         </span>

            <h1 className={styles.post_title}><Link href='/blog/1'>{postData.title}</Link></h1>

            <p className={styles.post_description}>{postData.content}</p>
            
            <div className={styles.postblock_meta}>
             <span className={styles.meta_author}>
                <Image alt='thumbnail' width={50} height={50} src={postData.postMeta.author.thumbnail} />
                <span>{postData.postMeta.author.name}</span>
             </span>

             <span className={styles.meta_date}>
                    {postData.postMeta.publishDate}
             </span>
         </div>
            
        </div>
    </div>
  )
}

export default PickedPost