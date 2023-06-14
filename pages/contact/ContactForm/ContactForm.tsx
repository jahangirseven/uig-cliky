import React from 'react'
import styles from './ContactForm.module.css'
import { Button } from 'antd'
import {useForm} from 'react-hook-form'
function ContactForm() {

  const {register , handleSubmit} = useForm() ;

  function formSubmit(data:any){
    console.log(data)
  }


  return (
    <div className={`${styles.contact_form} contact_page__form`}>
        
        <form className='user__form' onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor='input__fullname'>Name
           <input type='text' className='input_standard' placeholder='Enter your name' {...register('name')} />
        </label>

        <label htmlFor='input__fullname'>Surname
           <input type='text' className='input_standard' placeholder='Enter your surname' {...register('surname')} />
        </label>

        <label htmlFor='input__fullname'>Mail address

           <input type='text' className='input_standard' placeholder='Add your eMail address' {...register('mail')}/>
        </label>
        <label htmlFor='input__fullname'>Subject

           <input type='text' className='input_standard' placeholder='Enter message subject' {...register('message_subject')}/>
        </label>
        <label htmlFor='input__fullname'>Message

           <textarea className='input_standard textarea_extra' placeholder='Write your message' {...register('message_content')}>

           </textarea>
           </label>
            
        <Button size='large' type='primary' className='br-2' block htmlType='submit'> Send message</Button>
         </form>
    </div>
  )
}

export default ContactForm