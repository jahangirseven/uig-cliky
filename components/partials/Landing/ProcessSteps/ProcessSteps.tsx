import React from 'react'
import styles from './ProcessSteps.module.css'
import {SlidersOutlined , DotChartOutlined , TeamOutlined} from '@ant-design/icons'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading';
function ProcessSteps() {
    const description = 'This is a description.';
 

  return (
    <div className={`${styles.process_steps} normalize__padding section__process_steps`}>
      <BoxedHeading title='Why you shuld select us'/>
         <h1 className='section_heading_text'>The Essential Trio: Our Top 3 Features</h1>
         <p className='section_description_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br> deserunt mollit laborum — semper quis lectus nulla.</p>
         
         <div className={styles.steps_list}>
                <div className={`${styles.single_step} elm_col_3`}>
                    <span className={styles.step_icon} >
                    <SlidersOutlined />
                    </span>
                    
                    <h1>Customizable Dashboard</h1>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                 </div>

                 <div className={`${styles.single_step} elm_col_3`}>
                    <span className={styles.step_icon}>
                    <DotChartOutlined />
                    </span>
                    
                    <h1>Automated Reporting</h1>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                 </div>

                 <div className={`${styles.single_step} elm_col_3`}>
                    <span className={styles.step_icon}>
                    <TeamOutlined />
                    </span>
                    
                    <h1>Team Collaboration Tools</h1>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                 </div>
          </div>
    </div>
  )
}

export default ProcessSteps