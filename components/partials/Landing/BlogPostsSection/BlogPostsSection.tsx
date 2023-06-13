import React,{useState , useEffect} from 'react'
import styles from './BlogPostsSection.module.css'
import SinglePostBlock from '@/components/UI/blog/SinglePostBlock/SinglePostBlock'
import { postList } from '@/data/post_list' 
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'

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

function BlogPostsSection() {
  const [postListState,setPostList] = useState<Post[]>(postList);
  useEffect(()=>{
       setPostList(postList)
  })
  return (
    <section className={styles.blogposts_section}>
      <BoxedHeading title='Blog' />
         <h1 className='section_heading_text'>Posts from our blog</h1>
         <p className='section_description_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br> deserunt mollit laborum — semper quis lectus nulla.</p>
         
         <div className={`${styles.postlist_container} postlist_container`}>

          {
            postListState.slice(0,3).map(post=>{
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
    </section>
  )
}

export default BlogPostsSection