import React from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';
import { yupResolver } from '@hookform/resolvers/yup';


export default function FormSignup() {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    username: yup.string().required("Please enter username"),
    emailaddress: yup.string().email().required("Please enter Email"),
    city: yup.string().required("Please enter your city"),
    password: yup.string().required("Please enter your password"),
    confirmpassword: yup.string().label('confirm password').required().oneOf([yup.ref('password')], 'Passwords must match'),
    rememberme: yup.boolean(),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log({ data });
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[40px] items-center">
      <div className='flex flex-col gap-[32px]'>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Name</div>
          <input {...register("name")}
            className='Input'
            type="text"
            placeholder='Type your name' />
          <p className='text-grey'>{errors.name?.message}</p>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Username</div>
          <input {...register("username")}
            className='Input'
            type="text"
            placeholder='Type your username' />
          <p className='text-grey'>{errors.username?.message}</p>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Email Address</div>
          <input {...register("emailaddress")}
            className='Input'
            type="text"
            placeholder='Type your email' />
          <p className='text-grey'>{errors.emailaddress?.message}</p>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>City</div>
          <input {...register("city")}
            className='Input'
            type="text"
            placeholder='Type your city' />
          <p className='text-grey'>{errors.city?.message}</p>
        </div>
      </div>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-row gap-[16px]'>
          <div className='flex flex-col gap-[8px] items-start'>
            <div>Password</div>
            <input {...register("password")}
              className='Input w-[282px]'
              type="password"
              placeholder='Type your Password' />
            <p className='text-grey'>{errors.password?.message}</p>
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div>Confirm Password</div>
            <input {...register("confirmpassword")}
              className='Input w-[282px]'
              type="password"
              placeholder='Retype your password' />
            <p className='text-grey'>{errors.confirmpassword?.message}</p>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-[4px]'>
            <input {...register('rememberme')} type="checkbox" value='Remember me' />
            <label>Remember me</label>
          </div>
          <button>Forgot Password?</button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[16px]'>
        <div className='flex flex-row gap-[16px]'>
          <button className='Btn_secondary w-[195px]' type='button'>Back</button>
          <button className='Btn_primary w-[195px]'
            type='submit'
          >LOGIN</button>
        </div>
        <div className='flex flex-row gap-[4px]'>
          <div className='text-black text-[14px] leading-[18px] font-normal'>Do not have an account?</div>
          <div className='text-black text-[14px] leading-[18px] font-bold'>Sign Up</div>
        </div>
      </div>
    </form>
  )
}


