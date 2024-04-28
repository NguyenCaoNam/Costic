import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';


export default function ContactWithUsForm() {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    email: yup.string().email().required("Please enter email"),
    message: yup.string().required("Please enter message"),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log({ data });
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[40px]">
      <div className="text-[24px] leading-[34px] text-center">Send Us An Email</div>
      <div className="flex flex-col gap-[32px] items-center">
        <div className="flex flex-col gap-[16px] items-center">
          <div className='flex flex-col gap-[8px] items-start'>
            <div className="text-[16px] text-medium leading-[22px]">Your Name</div>
            <input {...register("username")}
              className='Input'
              type="text"
              placeholder='Type your name' />
            <p className='text-grey'>{errors.username?.message}</p>
          </div>
          <div className='flex flex-col gap-[8px] items-start'>
            <div className="text-[16px] text-medium leading-[22px]">Email</div>
            <input {...register("email")}
              className='Input'
              type="text"
              placeholder='Type your email' />
            <p className='text-grey'>{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-[16px] text-medium leading-[22px]">Message</div>
            <textarea {...register("message")}
              className="Input h-[224px]"
              placeholder="Type your message" />
            <p className="text-grey">{errors.message?.message}</p>
          </div>
        </div>
        <button className='Btn_primary w-[195px]'
          type='submit'
        >SEND MESSAGE</button>
      </div>

    </form>

  )
}