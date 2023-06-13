import React from 'react'
 import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import styles from './TeamBlock.module.css'
import TeamMember from '@/components/UI/TeamMember/TeamMember'
import member_01 from '/public/images/team/team-member-01.jpg'
import member_02 from '/public/images/team/team-member-02.jpg'
import member_03 from '/public/images/team/team-member-03.jpg'
import member_04 from '/public/images/team/team-member-04.jpg'
import member_05 from '/public/images/team/team-member-05.jpg'
import member_06 from '/public/images/team/team-member-06.jpg'
import member_07 from '/public/images/team/team-member-07.jpg'
import member_08 from '/public/images/team/team-member-08.jpg'
const member_list = [
  {
    id  : 1, 
    avatar : member_01 , 
    member_name : 'Jahangir Kazimli' , 
    member_position : 'Frontend Engineer' , 
    member_twitter  : '@jahangir_seven' 
  },
  {
    id  : 2, 
    avatar : member_02 , 
    member_name : 'Ilahe Kazimova' , 
    member_position : 'UI Developer' , 
    member_twitter  : '@ilahe_kazimli' 
  },
  {
    id  : 3, 
    avatar : member_03 , 
    member_name : 'Mustafa Mustafayev' , 
    member_position : 'Backend Engineer' , 
    member_twitter  : '@musti_mevv' 
  },
  {
    id  : 4, 
    avatar : member_04 , 
    member_name : 'Rashad Aliev' , 
    member_position : 'Security Engineer' , 
    member_twitter  : '@rashal_aliev' 
  },
  {
    id  : 5, 
    avatar : member_05 , 
    member_name : 'Kerim Rehimov' , 
    member_position : 'UX/UI designer' , 
    member_twitter  : '@kerim_uix' 
  },
  {
    id  : 6, 
    avatar : member_06 , 
    member_name : 'Elbrus Nomanev' , 
    member_position : 'Frontend Engineer' , 
    member_twitter  : '@elb_rus' 
  },
  {
    id  : 7, 
    avatar : member_07 , 
    member_name : 'Rashad Aliev' , 
    member_position : 'Security Engineer' , 
    member_twitter  : '@rashal_aliev' 
  },
  {
    id  : 8, 
    avatar : member_08 , 
    member_name : 'Rashad Aliev' , 
    member_position : 'Security Engineer' , 
    member_twitter  : '@rashal_aliev' 
  }
]
function TeamBlock() {
  return (
    <div className={styles.team_block}>
        
        <BoxedHeading title='Our team' />
           <h1 className='page__entry_title'>Meet the cliky family</h1>
              <p className='page__entry_desc'>
               
              Maximize team productivity with our seamless workflow automation <br></br>platform,  eliminating manual tasks and unleashing efficiency.  </p>

              <div className={styles.team_member__list}>
                   {
                    member_list.map(member=>{
                      return (<TeamMember key={member.id}
                            avatar={member.avatar}
                            member_name={member.member_name} 
                            member_position={member.member_position}
                            member_twitter={member.member_twitter}
                        />)
                    })
                  }
              </div>

    </div>
  )
}

export default TeamBlock