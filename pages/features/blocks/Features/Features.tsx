import React from 'react'
import styles from './Features.module.css'
import SingleFeature from '@/components/UI/SingleFeature/SingleFeature'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import {  CheckCircleOutlined ,
          ApartmentOutlined ,
          BulbOutlined,
          ShareAltOutlined ,
          DotChartOutlined, 
          CodeSandboxOutlined } from '@ant-design/icons'

function Features() {

  const featureList = [
    {
      title : 'Task Management' ,
      description : 'Efficiently create and assign tasks to team members.',
      icon :<CheckCircleOutlined />
    },
    {
      title : 'Workflow Automation' ,
      description : 'Streamline processes by automating repetitive tasks.',
      icon :<ApartmentOutlined />
    },
    {
      title : 'Real-Time Notifications' ,
      description : 'Streamline processes by automating repetitive tasks.',
      icon :<BulbOutlined />
    },
    {
      title : 'File Sharing and Collaboration' ,
      description : 'Seamlessly collaborate on project files and documents.',
      icon :<ShareAltOutlined />
    },
    {
      title : 'Reporting and Analytics' ,
      description : 'Seamlessly collaborate on project files and documents.',
      icon :<DotChartOutlined />
    },
    {
      title : 'Integration with   Tools' ,
      description : 'Enhance workflow efficiency with integrations to popular tools.',
      icon :<CodeSandboxOutlined />
    }
  ]

  return (

    <>
    
    <BoxedHeading style='rounded' title='Features' bgColor='orange' textColor='#fff'/>
            <h1 className='section_heading_text'>
              Powerful workflow app for<br></br> Professional teams
            </h1>

            <p className='section_description_text'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official <br></br>
            deserunt mollit laborum — semper quis lectus nulla.
            </p>
            <div className={styles.feature__list}>
                {
                  featureList.map(feature=>{
                      return (<SingleFeature 
                        icon={feature.icon}
                        headingText={feature.title}
                        descriptionText={feature.description}
                      />)
                  })
                }
            </div>
            </>
  )
}

export default Features