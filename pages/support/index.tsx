import React , {useState} from 'react'
import { Anchor, Row, Col } from 'antd';
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading';
import styles from './Support.module.css'
import ContentBlockOne from './contents/ContentBlockOne';
import ContentBlockTwo from './contents/ContentBlockTwo';
import ContentBlockThree from './contents/ContentBlockThree';
import ContentBlockFour from './contents/ContentBlockFour';

function index() {
const [currentPage , setCurrentPage] = useState(1) ;

const pageList = [
    {
        pageID :1 , 
        pageTitle : 'Frequently Asked Questions', 
        content : <ContentBlockOne />
    },
    {
        pageID :2 , 
        pageTitle : 'What is Cliky', 
        content : <ContentBlockTwo />
    },
    {
        pageID :3 , 
        pageTitle : 'Get started', 
        content : <ContentBlockThree />
    },
    {
        pageID :4 , 
        pageTitle : 'Payments FAQ’s', 
        content : <ContentBlockFour />
    },
]




  return (
    <MainLayout pageTitle='Support'>
 <section className='page__container'> 
           <BoxedHeading style='rounded' title='Contact' bgColor='orange' textColor='#fff'/>
            <h1 className='page__entry_title'>Help center</h1>
            <p className='page__entry_desc'>
               Get in touch with us today. We're here to assist you.
            </p>

   <div className={styles.helpcenter__content}>
      <div className={styles.left_slot}>
         <h2>Choose a category</h2>
         <ul>
              {
                pageList.map(item=>{
                    return <li onClick={()=>{setCurrentPage(item?.pageID)}}>{item?.pageTitle}</li>
                })
              }
         </ul>
      </div>
 
      <div className={styles.right_slot}>
         { pageList[currentPage-1].content }
      </div>

   </div>


  </section>
  </MainLayout>
  )
}

export default index