import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { toastLogoutSuccess } from '../utils/plugins/Toast';
import { setIsLogin } from '../redux/rootSlice';
import { Backdrop, CircularProgress } from '@mui/material';

const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const credential = useAppSelector(state => state.root.credential)

  const handleLogout = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      toastLogoutSuccess()
      navigation('/')
      dispatch(setIsLogin(false));
    }, 1500);
  }

  return (
    <div className='flex flex-col gap-[40px]'>
      <div className='text-3xl font-semibold'>MY PROFILE</div>
      <div className='flex flex-col m-auto gap-6'>
        <div className='flex flex-col gap-[8px]'>
          <div className='text-black text-[16px] text-left font-medium'>Username</div>
          <input className='Input w-auto' defaultValue={credential.username} />
        </div>
        <div className='flex flex-col gap-[8px]'>
          <div className='text-black text-[16px] text-left font-medium'>Mobile Number</div>
          <input className='Input w-auto' defaultValue={'0912825107'} />
        </div>
        <div className='flex flex-col gap-[8px]'>
          <div className='text-black text-[16px] text-left font-medium'>Email Address</div>
          <input className='Input w-auto' defaultValue={'nguyencaohainam@gmail.com'} />
        </div>
        <div className='flex flex-row gap-[8px]'>
          <button className='Btn_secondary'>Change Password</button>
          <button className='Btn_primary' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default MyProfile