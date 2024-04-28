import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from '../../hooks';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toastLoginSuccess } from '../../utils/plugins/Toast';
import { useLocation, useNavigate } from 'react-router-dom'
import { setIsLogin } from '../../redux/rootSlice';

export default function LoginForm() {
  const [loginState, setLoginState] = useState("")
  const [open, setOpen] = useState(false);

  const credentials = useAppSelector(state => state.root.credential)
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().min(8).max(32).required("Please enter password"),
    rememberme: yup.boolean(),
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    setOpen(true);
    if (data?.username !== credentials?.username || data?.password !== credentials?.password) {
      setTimeout(() => {
        setOpen(false);
        setLoginState("Username or password is incorrect");
      }, 1000);
    } else {
      setTimeout(() => {
        setOpen(false);
        setLoginState('');
        reset();
        toastLoginSuccess();
        dispatch(setIsLogin(true));
        handleNavigation()
      }, 1500);
    }
  }

  const handleNavigation = () => {
    navigation(location?.state?.prevUrl ? location?.state?.prevUrl : '/');
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='text-center text-[24px] leading-[18px] uppercase text-black mb-5'>Login</div>
      {loginState && <p className='text-center text-red-600 text-xl mb-5'>{loginState}</p>}
      <form className='flex flex-col gap-[40px] items-center'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
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
                <input {...register('rememberme')} type="checkbox" value='true' />
                <label>Remember me</label>
              </div>
              <button>Forgot Password?</button>
            </div>
          </div>
          <div className='flex flex-col items-center gap-[16px] mt-5'>
            <button className='Btn_primary w-full'
              type='submit'
            >LOGIN</button>
            <button className='Btn_secondary w-full' type='button' onClick={handleNavigation}>Back</button>
            <div className='flex flex-row gap-[4px]'>
              <div className='text-black text-[14px] leading-[18px] font-normal'>Do not have an account?</div>
              <div className='text-black text-[14px] leading-[18px] font-bold'>Sign Up</div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}


