import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import BoxedHeading from '@/components/UI/BoxedHeading/BoxedHeading'
import { Button } from 'antd'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
function index() {
  const {register , handleSubmit} = useForm() ; 

  function formSubmit(data:any){
    console.log(data)
  }

  return (
    <MainLayout pageTitle='Login'>
        <section className='page__container'>
        <BoxedHeading style='rounded' title='Login' bgColor='orange' textColor='#fff'/>
        <h1 className='page__entry_title'>Login to your account</h1>
             <p className='page__entry_desc'>
             Sign up now to access advanced features, join our communities, and <br></br>experience  amazing adventures!  Create an account effortlessly<br></br> and  unlock the doors to a new world.
              </p>


              <form className='user__form' onSubmit={handleSubmit(formSubmit)}>
                  <label htmlFor='input__fullname'>Mail address
                    <input type='email' className='input_standard' id='input__fullname' placeholder='Enter your mail' {...register('user_mail')}/>
                  </label>


                  <label htmlFor='input__pass'>Password
                    <input type='password' className='input_standard' id='input__pass'  placeholder='*********' {...register('user_password')}/>
                  </label>


                    <Button  size='large' type='primary' className='br-2' block htmlType="submit">Register</Button>

                    <p>Don't have an account ? <Link href='/register'>Register</Link></p>
                 </form>


        </section>

        </MainLayout> 
  )
}

export default index