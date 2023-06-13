import React,{useState} from 'react'
import styles from './PricingBlock.module.css'
import PricingBox from '../../components/PricingBox/PricingBox'
import { Switch } from 'antd';


function PricingBlock() {

    const pricingPlans = [
       {"monthly" : 29 , "yearly" : 299},
       {"monthly" : 59 , "yearly" : 599},
       {"monthly" : 79 , "yearly" : 799},
    ] ; 

    const [planType,setPlanType] = useState('monthly')

    function handlePlanChange(checked: boolean){
        
        if(!checked){
            setPlanType('monthly')
        }else{
            setPlanType('yearly')
        }
    }

    const pricingDetails = [
        {
            planName : 'Beginner' , 
            price : planType=='monthly' ? pricingPlans[0].monthly :pricingPlans[0].yearly  , 

            description  : 'Description the the pricing box' ,
            featureList : [
                "Basic Workflow Management" , 
                "User Limits (10 users)" , 
                "Basic Integrations" , 
                "Simple Reporting" , 
                "Simple Reporting" , 
            ]
        },
        {
            planName : 'Standard' , 
            price : planType=='monthly' ? pricingPlans[1].monthly :pricingPlans[1].yearly   , 
            description  : 'Description the the pricing box' ,
            featureList : [
                "Advanced Workflow Management" , 
                "Expanded User Limits(30 users)" , 
                "Integration Marketplace" , 
                "Integration Marketplace" , 
                "Advanced Support" , 
            ]
        },{
            planName : 'Advanced' , 
            price : planType=='monthly' ? pricingPlans[2].monthly :pricingPlans[2].yearly   , 
            description  : 'Description the the pricing box' ,
            featureList : [
                "Advanced Workflow Management" , 
                "Advanced Integrations" , 
                "Personalized Support" , 
                "Unlimited users" , 
                "Data security" , 
            ]
        }
    ]


    return (
        <>
        
     <div className={styles.plan__choice}>
            Monthly
             <Switch onChange={handlePlanChange} />
             Yearly
     </div>
    <div className={styles.pricing__block}>
        {
            pricingDetails.map(data=>{
                return (<PricingBox 
                    planName={data.planName}
                    price={data.price}
                    planType={planType}
                    description={data.description}
                    featureList={data.featureList}
                
                />)
                
            })
        }
         
    </div>

    </>
  )
}

export default PricingBlock