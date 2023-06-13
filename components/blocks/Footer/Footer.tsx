import React from 'react'
import styles from './Footer.module.css'
import logo from './../../../assets/images/cliky_logo_light.png' ;
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
  return ( 
    <footer  className={`${styles.footer} app_footer`}>
       <div className={`${styles.content_limiter} content_limiter footer_container`}>
          <div className={`${styles.footer_widget} ${styles.widget__about}  footer_widget `}>
            <Image alt='Footer logo' width={140} height={55} src={logo} />
            <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

          </div>


          <div className={`${styles.footer_widget} footer_widget`}>
             <h5>Products</h5>
             <ul>
                <li><Link href='/'>Uptech</Link></li>
                <li><Link href='/'>Micron</Link></li>
                <li><Link href='/'>Competo</Link></li>
             </ul>
          </div>

          <div className={`${styles.footer_widget} footer_widget`}>
             <h5>Resources</h5>
             <ul>
                <li><Link href='/'>Uptech</Link></li>
                <li><Link href='/'>Micron</Link></li>
                <li><Link href='/'>Competo</Link></li>
             </ul>
          </div>

          <div className={`${styles.footer_widget} footer_widget`}>
             <h5>Company</h5>
             <ul>
                <li><Link href='/'>Uptech</Link></li>
                <li><Link href='/'>Micron</Link></li>
                <li><Link href='/'>Competo</Link></li>
                 
             </ul>
          </div>

       </div>
    </footer>
  )
}

export default Footer