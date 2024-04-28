import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { toastChangePasswordSuccess, toastLogoutSuccess } from '../utils/plugins/Toast';
import { setCredential, setIsLogin } from '../redux/rootSlice';
import { Backdrop, Box, CircularProgress, Modal, Typography } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [msgError, setMsgError] = useState('');

  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const credential = useAppSelector(state => state.root.credential)

  const schema = yup.object().shape({
    currentpassword: yup.string().required("Please enter your current password"),
    newpassword: yup
      .string()
      .required("Please enter your new password")
      .min(8, "Password must be at least 8 characters long"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('newpassword'), undefined], 'Confirm password is not match')
      .required("Please retype your password"),
    rememberme: yup.boolean(),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    if (credential.password !== data?.currentpassword) {
      setOpenModal(false)
      setOpen(true)
      setTimeout(() => {
        setOpenModal(true)
        setOpen(false)
        setMsgError('Current password is invalid!')
      }, 1500);
    } else {
      setOpen(true)
      setOpenModal(false)
      setTimeout(() => {
        dispatch(setCredential({
          username: credential.username,
          password: data?.newpassword
        }))
        setOpen(false)
        setMsgError('')
        toastChangePasswordSuccess()
        reset()
      }, 1500);
    }
  }

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

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
          <button className='Btn_secondary' onClick={handleOpen}>Change Password</button>
          <button className='Btn_primary' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={{ ...style, width: 600 }}>
          <Typography id="transition-modal-title" variant="h4" className='text-center' component="h2">
            Change Password
          </Typography>
          {
            msgError && <p className='text-center text-red-700 text-xl'>{msgError}</p>
          }
          <form className="flex flex-col gap-[40px] items-center"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[16px] items-center w-full">
              <div className='flex flex-col gap-[8px] w-full items-start'>
                <div>Current Password</div>
                <input {...register("currentpassword")}
                  className='Input w-full'
                  type='password'
                  placeholder='Please enter current password'></input>
                <p>{errors.currentpassword?.message}</p>
              </div>
              <div className='flex flex-col gap-[8px] w-full items-start'>
                <div>New Password</div>
                <input {...register("newpassword")}
                  className='Input w-full'
                  type='password'
                  placeholder='Please enter new password'></input>
                <p>{errors.newpassword?.message}</p>
              </div>
              <div className='flex flex-col gap-[8px] items-start w-full'>
                <div>Confirm Password</div>
                <input {...register("confirmpassword")}
                  className='Input w-full'
                  type='password'
                  placeholder='Please  retype password'>
                </input>
                <p>{errors.confirmpassword?.message}</p>
              </div>
              <div className="w-full items-start">
                <div className='flex flex-row gap-[4px]'>
                  <input {...register("rememberme")} type="checkbox" />
                  <div>Remember me</div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <button className='Btn_primary w-full'>Change Password</button>
                <button className='Btn_secondary w-full' onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default MyProfile