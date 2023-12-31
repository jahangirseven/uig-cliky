import React from 'react'
import styles from './SecondaryLayout.module.css'
import Head from 'next/head'
import Header from './../../blocks/Header/Header'
import Footer from './../../blocks/Footer/Footer'
interface SecondaryLayoutProps{
    children : React.ReactNode , 
    pageTitle : string
  }


function SecondaryLayout({pageTitle , children} : SecondaryLayoutProps) {
  return (
    <>
    <Head>
     <title>{ pageTitle }</title>
     <meta name="description" content="Generated by create next app" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="icon" href="/favicon.ico" />
   </Head>


   <Header />
            {children}
     
 
   <Footer />
 </>
  )
}

export default SecondaryLayout