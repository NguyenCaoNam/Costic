import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data)
  return (
    <form className='flex flex-col gap-[40px] items-center'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='text-[24px] leading-[18px] uppercase text-black'>Login</div>
      <div className='flex flex-col gap-[32px]'>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Username</div>
          <input className='Input'
            {...register('Username',
            {require: "Please enter username" })}
            type='text'
            id='Type ypur username'
            placeholder='Username'></input>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[8px] items-start'>
            <div>Password</div>
            <input className='Input'
              {...register('Password')}
              type='password'
              id='Type your password'
              placeholder='Password'></input>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-[4px]'>
              <input {...register('Remember me')} type="checkbox" value='Remember me' />
              <label>Remember me</label>
            </div>
            <button>Forgot Password</button>
          </div>
        </div>
        <div>
          <div className='flex flex-row gap-[16px]'>
            <button className='Btn_secondary w-[195px]'>Back</button>
            <button className='Btn_primary w-[195px]' 
            type='submit'
            id='submit'
            >LOGIN</button>
          </div>
          <div></div>
        </div>
      </div>
    </form>
  )
}


