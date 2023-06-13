import React from 'react'
import styles from './NumberStats.module.css'

function NumberStats() {
  return (
     <>
         <h1 className='section_heading_text'>
            Powerful workflow app for<br></br> professional teams
            </h1>

            <p className='section_description_text'>
            Excepteur sint occaecat cupidatat , sunt culpa qui official <br></br>
            deserunt mollit laborum — semper quis nulla.
            </p>

            
          <div  className={styles.numberstats}>
               <div className={styles.single_part}>
                    <span className={styles.number}>93%</span>
                    <p className={styles.description}>Lorem ipsum is placeholder <br></br>text commonly used.</p>
               </div>

               <div className={`${styles.single_part} ${styles.single_part__center}`}>
                    <span className={styles.number}>97%</span>
                    <p className={styles.description}>Lorem ipsum is placeholder <br></br>text commonly used.</p>
               </div>

               <div className={styles.single_part}>
                    <span className={styles.number}>95%</span>
                    <p className={styles.description}>Lorem ipsum is placeholder <br></br>text commonly used.</p>
               </div>
          </div>
     </>
  )
}

export default NumberStats