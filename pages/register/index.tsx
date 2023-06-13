import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
 import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
 import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


function index() {
  const {register , handleSubmit} = useForm() ;

  function formSubmit(data:any){
    console.log(data)
  }
  return (
     <MainLayout pageTitle='Register'>
        <section className='page__container'>
        <BoxedHeading style='rounded' title='Register and Explore' bgColor='orange' textColor='#fff'/>
             <h1 className='page__entry_title'>Register and Get Started</h1>
             <p className='page__entry_desc'>
             Sign up now to access advanced features, join our communities, and <br></br>experience  amazing adventures!  Create an account effortlessly<br></br> and  unlock the doors to a new world.
              </p>


                 <form className='user__form' onSubmit={handleSubmit(formSubmit)}>
                  <label htmlFor='input__fullname'>Full name
                    <input type='text' className='input_standard' id='input__fullname' placeholder='First and last name' {...register('fullname')} />
                  </label>

                  <label htmlFor='input__mail'>Mail address
                    <input type='text' className='input_standard' id='input__mail'  placeholder='you@example.com' {...register('mail')}/>
                  </label>

                  <label htmlFor='input__compamy'>Company
                    <input type='text' className='input_standard' id='input__compamy'  placeholder='Your company name' {...register('company_name')}/>
                  </label>

                  <label htmlFor='input__pass'>Password
                    <input type='password' className='input_standard' id='input__pass'  placeholder='Strong password' {...register('password')}/>
                  </label>

                  <label htmlFor='input__repass'>Re-Password
                    <input type='password' className='input_standard' id='input__repass' placeholder='Strong password' {...register('re_password')}/>
                  </label>
 

                    <Button  size='large' type='primary' className='br-2' block htmlType='submit'>Register</Button>

                    <p>Already have an account ? <Link href='/login'>Log in</Link></p>
                 </form>


        </section>
     </MainLayout>
  )
}

export default index