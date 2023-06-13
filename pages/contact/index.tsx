"use client";
import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import ContactForm from './ContactForm/ContactForm'

function index() {
  return (
    <MainLayout pageTitle='Contact us'>
        <section className='page__container'>
            <BoxedHeading style='rounded' title='Contact' bgColor='orange' textColor='#fff'/>
            <h1 className='page__entry_title'>How can we help you?</h1>
            <p className='page__entry_desc'>
               Get in touch with us today. We're here to assist you.
            </p>
            <ContactForm />
        </section>
    </MainLayout>
  )
}

export default index 