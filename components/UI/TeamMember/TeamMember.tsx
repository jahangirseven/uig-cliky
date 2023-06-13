import React from 'react'
import styles from './TeamMember.module.css'
import Image from 'next/image'

interface TeamMemberProps{
    avatar : string , 
    member_name : string , 
    member_position : string , 
    member_twitter  : string 
}
function TeamMember({avatar , member_name , member_position , member_twitter} : TeamMemberProps) {
  return (
    <div className={styles.team_member}>
        <Image width={100} height={100} src={avatar} alt='Member avatar' />
        <h3 className={styles.member_name}>{member_name}</h3>

        <span className={styles.member_position}>{member_position}</span>
        <span className={styles.member_twitter}>{member_twitter}</span>
  
    </div>
  )
}

export default TeamMember