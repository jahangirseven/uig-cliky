import React , {useState} from 'react'
import styles from './SingleJob.module.css'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import JobModal from '../JobModal/JobModal'

interface singleJobProps{
    job_id : number , 
    job_title : string , 
    job_type : string , 
    job_description : string ,
    job_requirements : string[],

}

function SingleJob({job_id, job_title , job_type , job_description , job_requirements} : singleJobProps) {
  const [modalStatus , setModalStatus] = useState<any>(false) ;
  const navigate = useRouter() ;
  return (
    <div className={`${styles.singleJob} singleJob elm_col_3`}>
       <div className={`${styles.left_slot}`}>
        <span className={styles.job__type}>{job_type}</span>
          <h3>{job_title}</h3>
       </div>

       <div className={`${styles.right_slot}`}>
          <p>{job_description.slice(0,90) + '...'}</p>
          <Button className='br-2 btn-standard'
                  type='primary' 
                  onClick={()=>{setModalStatus(!modalStatus)}}>Apply now</Button>
       </div>

       {
        modalStatus &&
         <JobModal
         job_id={job_id}
          job_title={job_title}
          job_description={job_description}
          job_type={job_type}
          modal_status={modalStatus}
          setModalStatus={setModalStatus}
          job_requirements={job_requirements}
         />
       }
    </div>
  )
}

export default SingleJob