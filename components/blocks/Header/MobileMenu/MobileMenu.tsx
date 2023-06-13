import React from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.css'

function MobileMenu() {
  return (
    <div className={`${styles.mobileMenu__container} mobileMenu__container`}>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/features'>Features</Link></li>
            <li><Link href='/pricing'>Pricing</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/about'>About us</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/support'>Support</Link></li>
        </ul>
        
    </div>
  )
}

export default MobileMenu