import React, { useEffect ,useState} from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import { Button } from 'antd';
import Link from 'next/link';
import logo_url from './../../../assets/images/cliky_logo_light.png'
import MobileMenu from './MobileMenu/MobileMenu';
import { MenuOutlined , CloseOutlined } from '@ant-design/icons'
 
function Header() {
  const [stickyHeader , setStickyHeader] = useState('sticky_disabled');
  const [mobileMenuStatus , setMobileMenuStatus] = useState(false);

  useEffect(()=>{
     document.addEventListener('scroll',()=>{
        if(window.scrollY>10){
              setStickyHeader('sticky_header_enabled')
            }else{
              setStickyHeader('sticky_header_disabled')
        }
     })
  },[])

  function switchMobileMenu(){
    setMobileMenuStatus(prevState=>!prevState)
  }

  return (
    <section className={`${styles.header} ${stickyHeader}`}>
      <div className='content_limiter'>
         <div className={styles.header_logo}>
          <Link href='/'>
              <Image alt='Header logo' src={logo_url} />
          </Link>
         </div>


         <nav className={`${styles.navbar} header__navigation`}>
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/features'>Features</Link></li>
              <li><Link href='/pricing'>Pricing</Link></li>
              <li><Link href='/blog'>Blog</Link></li>
              <li><Link href='/about'>About us</Link></li>
              <li><Link href='/contact'>Contact</Link></li>
              <li><Link href='/careers'>Careers</Link></li>
              <li><Link href='/support'>Support</Link></li>
            </ul>
         </nav> 


         <div className={styles.header_toolbox}>
         <Button type="link" className='header_btn'><Link href='/register'>Sign up</Link></Button>
         <Button type="primary"  size='large' className='br-2 btn-standard header_btn'><Link href='/login'>Sign in</Link></Button>

         <Button type="primary" size='large' className='br-2 mobilemenu__header_btn' onClick={switchMobileMenu}>
            {
              mobileMenuStatus ? <CloseOutlined /> :  <MenuOutlined />
            }
             
          </Button>
         </div>

         {
          mobileMenuStatus &&  <MobileMenu />
         }
        

      </div>
    </section>
  )
}

export default Header