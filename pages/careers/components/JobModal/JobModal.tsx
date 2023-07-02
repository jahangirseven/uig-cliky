import React from 'react'
import styles from './JobModal.module.css'
import { Button } from 'antd'

interface singleJobProps{
    job_id : number , 
    job_title : string , 
    job_type : string , 
    job_description : string ,
    job_requirements : string[],
    modal_status : Boolean , 
    setModalStatus : any 
}


function JobModal({job_id, job_title , job_type , job_description , modal_status , setModalStatus, job_requirements} : singleJobProps) {
  return (
    <section className={styles.modal__layer} onClick={()=>{setModalStatus(false)}}>
        <div className={`${styles.modal__self} job__modal`}>
          <h1 className={styles.job__title}>{job_title} <span style={{fontWeight :400}}>[{job_type}]</span> </h1>
          <p>
            {job_description}
           </p>
          <span className={styles.divider__jobs}></span>
 
           
           <h2>Requirements</h2>
           <ul>
            {
              job_requirements?.map(requirement=>{
                return <li>{requirement}</li>
              })
            }
           </ul>

           <span className={styles.divider__jobs}></span>
          <h3>How to apply</h3>
          <p>If you would like to apply for this job position, please send your CV to example@mail.com with the subject line "Frontend Developer".</p>

          <span>
 

          </span>
        </div>
        
    </section>
  )
}

export default JobModal
















