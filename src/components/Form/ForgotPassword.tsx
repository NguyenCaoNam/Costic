import React from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';
import { yupResolver } from '@hookform/resolvers/yup';

export default function ForgotPassword() {
  const schema = yup.object().shape({
    usernameoremail: yup.string().required("Please enter your username or email")
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log({ data });
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[40px] items-center">
      <div className='flex flex-col gap-[8px] items-start'>
        <div>Usename or Email</div>
        <input {...register("usernameoremail")} className='Input'
          type="text"
          placeholder='Enter your username or email'
          id='Usernameoremail' />
        <p className=''>{errors.usernameoremail?.message}</p>
      </div>
      <div className='flex flex-row gap-[16px]'>
        <button type='button' className='Btn_secondary w-[195px]'>Back</button>
        <button type='submit' className='Btn_primary w-[195px]'>Send Reset Email</button>
      </div>
    </form>
  )
}