import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';

export default function LoginForm() {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().min(8).max(32).required("Please enter password"),
    rememberme: yup.boolean(),
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: unknown) => {
    console.log({data});
    reset();
  }
  return (
    <form className='flex flex-col gap-[40px] items-center'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='text-[24px] leading-[18px] uppercase text-black'>Login</div>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Username</div>
          <input className='Input'
            {...register('username')}
            type='text'
            id='Username'
            placeholder='Username'></input>
          <p className='text-red'>{errors.username?.message}</p>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[8px] items-start'>
            <div>Password</div>
            <input className='Input'
              {...register('password')}
              type='Password'
              id='Password'
              placeholder='Password'></input>
            <p className='text-grey'>{errors.password?.message}</p>
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
      </div>
    </form>
  )
}


