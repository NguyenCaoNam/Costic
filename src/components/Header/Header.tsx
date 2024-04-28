import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconCostic from '../../utils/icon/IconCostic'
import IconCardproduct from '../../utils/icon/iconCardproduct'
import IconHeart from '../../utils/icon/iconHeart'
import IconPersonal from '../../utils/icon/iconPersonal'
import IconSearch from '../../utils/icon/iconSearch'
import { useAppSelector } from '../../hooks'

const dataHeader = [
  {
    id: 1,
    route: '/',
    title: 'Home'
  },
  {
    id: 2,
    route: '/about',
    title: 'About Us'
  }, {
    id: 3,
    route: '/contact',
    title: 'Contact'
  }, {
    id: 4,
    route: '/shop',
    title: 'Shop'
  }, {
    id: 5,
    route: '/blog',
    title: 'Blog'
  }, {
    id: 6,
    route: '/trackingorder',
    title: 'Track Order'
  },
]

const Header = () => {
  const [active, setActive] = useState(1)
  const isLogin = useAppSelector(state => state.root.isLogin)
  const handleActive = (id: number) => {
    setActive(id)
  }
  return (
    <div className='flex flex-row items-center justify-between py-[18px] w-full'>
      <div className='flex flex-row gap-[32px] '>
        {
          dataHeader?.map(item => (
            <Link key={item?.id} onClick={() => handleActive(item?.id)} to={item?.route} className={`nav ${item?.id === active && 'font-semibold'}`}>{item?.title}</Link>
          ))
        }
      </div>
      <Link to={"/"}>
        <IconCostic color='black' />
      </Link>
      <div className='flex flex-row gap-[64px]'>
        <div className='flex flex-row gap-[10px] items-center w-[300px] px-[16px] py-[8px] border-solid rounded-[20px] border-black border-[1px] '>
          <IconSearch height={18} width={18} color='#6E706E' />
          <div>Search</div>
        </div>
        <div className='flex flex-row items-center gap-[32px]'>
          <Link to={"/wishlist"}><IconHeart /></Link>
          <Link to={"/cart"}><IconCardproduct /></Link>
          {
            isLogin
              ? <Link to={"/personal"}><IconPersonal /></Link>
              : <Link to={"/login"} className=''>Login</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Header