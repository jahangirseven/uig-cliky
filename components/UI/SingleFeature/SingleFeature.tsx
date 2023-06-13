import React from 'react'
import styles from './SingleFeature.module.css'

interface SingleFeatureProps{
  icon :  React.ReactNode ,
  headingText : string , 
  descriptionText: string
}

function SingleFeature({icon , headingText , descriptionText} : SingleFeatureProps) {
  return (
    <div className={styles.single__feature}>
        <span className={styles.step_icon}>{icon}</span>
        <h1>{headingText}</h1>
        <p>{descriptionText}</p>
    </div>
  )
}

export default SingleFeature