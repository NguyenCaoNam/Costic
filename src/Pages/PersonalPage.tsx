import React, { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { setIsLogin } from '../redux/rootSlice';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toastLogoutSuccess } from '../utils/plugins/Toast';

const PersonalPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigation = useNavigate()
  const handleLogout = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      toastLogoutSuccess()
      setTimeout(() => {
        navigation('/')
        dispatch(setIsLogin(false));
      }, 2500);
    }, 1500);
  }
  return (
    <div>
      <p>PersonalPage</p>
      <button onClick={handleLogout} className='Btn_primary'>Logout</button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default PersonalPage