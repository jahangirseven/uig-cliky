import React,{useState} from 'react'
import styles from './TabContent.module.css'
import FirstContent from './contents/FirstContent'
import SecondContent from './contents/SecondContent'
import ThirdContent from './contents/ThirdContent'
import FourthContent from './contents/FourthContent'
import FifthContent from './contents/FifthContent'
function TabContent() {
    const [currentTab , setCurrentTab] = useState<number>(1) ;

    function handleTabs(index : number){
           if(index>= 1){
            setCurrentTab(index)
           }else{
            setCurrentTab(1)
           }
    }

    function renderContent(){
        switch(currentTab){
            case 1 : 
              return   <FirstContent />
            break ; 

            case 2 : 
              return  <SecondContent />
            break ;

            case 3 : 
              return  <ThirdContent />
            break ;
            
            case 4 : 
              return  <FourthContent />
            break ;
            
            case 5 : 
              return  <FifthContent />
            break ;
        }
    }


  return (

     <div className={styles.tabcontent_self}>
         <div className={styles.tab_buttons}>
            <span className={styles.single_tab} onClick={()=>{handleTabs(1)}}>Customizable Templates</span>
            <span className={styles.single_tab} onClick={()=>{handleTabs(2)}}>Multi-User Access</span>
            <span className={styles.single_tab} onClick={()=>{handleTabs(3)}}>Analytics Dashboard</span>
            <span className={styles.single_tab} onClick={()=>{handleTabs(4)}}>Mobile Responsive</span>
            <span className={styles.single_tab} onClick={()=>{handleTabs(5)}}>Automatic updates</span>
         </div>

            {
                renderContent()
            }

    </div>
    
 
  )
}

export default TabContent