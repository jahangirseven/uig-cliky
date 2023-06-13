import React,{useState} from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import logo_404 from './../assets/images/404_logo.png'
import Image from 'next/image'


function Page404() {
  return (
    <MainLayout pageTitle='Page not found'>
         <section className='page__container'>
            <Image alt='404 logo' src={logo_404} width={180} height={180} />

         <h1 className='section_heading_text'>
             Page not found
            </h1>
            <p className='page__entry_desc'>
            Oops! The page you're looking for is missing. Please <br></br>
            check the URL or navigate to another section of our website.<br></br>
              </p>

         </section>
    </MainLayout>
  )
}

export default Page404