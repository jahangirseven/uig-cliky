import React,{useState} from 'react'
import SecondaryLayout from '@/components/Layouts/SecondaryLayout/SecondaryLayout'
import BannerThumbnail from '@/components/blocks/AboutBanner/BannerThumbnail'
import PickedPost from './components/PickedPost/PickedPost'
import SinglePostBlock from '@/components/UI/blog/SinglePostBlock/SinglePostBlock'
import { postList as post_list } from '@/data/post_list'
import Pagination from './components/Pagination/Pagination'
import SubscriptionBox from '@/components/UI/SubscriptionBox/SubscriptionBox'
import styles from './blog.module.css'
interface Post {
  id: number;
  thumbnail: string;
  title: string;
  content: string;
  categoryList: string[];
  postMeta: {
    author: {
      thumbnail: string;
      name: string;
    };
    publishDate: string;
  };
};


function index() {
  const [postList,setPostList] = useState<Post[]>([...post_list])
  return (
    <SecondaryLayout pageTitle='Blog'>
           <BannerThumbnail 
              title='Blog'
              description="Read the latest posts from our blog"
              bg_image='https://lockthemes.com/competo/wp-content/uploads/sites/11/2022/08/cpt-video-layer-2.jpg'
           />   

           <div className='page__limiter blogHome'>
                 <PickedPost />

                 <h1 className='section__leftTitle'>Latest posts</h1>
                 <div className={styles.posts_container}>
                  
                  {
                      postList.map(post=>{
                          return(<SinglePostBlock 
                            key={post.id} 
                            thumbnail={post.thumbnail}
                            title={post.title}
                            content={post.content}
                            categoryList={post.categoryList}
                            postMeta={post.postMeta}
                          />)
                      })
                  }
                 </div>
<Pagination />
<SubscriptionBox />
           </div>
    </SecondaryLayout>
  )
}

export default index