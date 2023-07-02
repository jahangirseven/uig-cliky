import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import SubscriptionFooter from '@/components/partials/SubscriptionFooter/SubscriptionFooter'
import SingleJob from './components/SingleJob/SingleJob'
import styles from './jobs.module.css'
import { jobList } from '@/data/job_list'

function index() {
  return (
    <MainLayout pageTitle='Pricing plans'>
         <section className='page__container page__jobs'>
         <BoxedHeading style='rounded' title='Pricing plans' bgColor='orange' textColor='#fff'/>

            <h1 className='section_heading_text'>
              Our job openings
            </h1>
             <p className='page__entry_desc'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br>
                eserunt mollit laborum — semper quis lectus nulla.        
             </p>

             <div className={`${styles.jobs__content} jobs__content`}>

                {
                    jobList?.map(job=>{
                        return  <SingleJob
                                job_id={job.job_id}
                                job_title={job.job_title}
                                job_type={job.Job_type}
                                job_description={job.job_description}
                                job_requirements={job.job_requirements}
                                />
                    })
                }
          
            </div> 

             <SubscriptionFooter />
         </section>
    </MainLayout>
  )
}

export default index