import React from 'react'
import styles from './AppFeaturesTabs.module.css'
import TabContent from '@/components/blocks/TabContent/TabContent'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
function AppFeaturesTabs() {
  return (
    <section className={styles.appFeaturesTabs}>
          <BoxedHeading title='Key Features' bgColor='orange'/>
           <h1 className='section_heading_text'>Impressive Functionality</h1>
           <p className='section_description_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br></br> deserunt mollit laborum — semper quis lectus nulla.</p>
           
           <TabContent />
    </section>
  )
}

export default AppFeaturesTabs