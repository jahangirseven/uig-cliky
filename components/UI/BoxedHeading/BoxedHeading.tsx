import React from 'react'
import styles from './BoxedHeading.module.css'

interface boxedHeadingProps{
    title? : string , 
    style? : string ,
    bgColor? : string , 
    textColor? : string , 
}

function BoxedHeading({title,style='rounded',bgColor='#5d5dff',textColor='#fff'} : boxedHeadingProps) {

    let styles = {
        borderRadius : style =='rounded' ? '30px' : '0px',
        backgroundColor : bgColor,
        color : textColor ,
        padding : '2px 15px',
        marginBottom : '15px',
        alignSelf : 'center'
    }

  return (
    <div  style={styles}>
        {title}
    </div>
  )
}

export default BoxedHeading