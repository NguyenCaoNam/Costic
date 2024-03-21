import { Link } from 'react-router-dom'
import IconCostic from '../../utils/icon/IconCostic'
import IconCardproduct from '../../utils/icon/iconCardproduct'
import IconHeart from '../../utils/icon/iconHeart'
import IconPersonal from '../../utils/icon/iconPersonal'
import IconSearch from '../../utils/icon/iconSearch'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between py-[18px] w-full'>
      <div className='flex flex-row gap-[32px] '>
        <Link to={"/"} className='nav'>Home</Link>
        <Link to={"/aboutus"} className='nav'>About Us</Link>
        <Link to={"/contact"} className='nav'>Contact</Link>
        <Link to={"/shop"} className='nav'>Shop</Link>
        <Link to={"/blog"} className='nav'>Blog</Link>
        <Link to={"/trackorder"} className='nav'>Track Order</Link>
      </div>
      <IconCostic color='black' />
      <div className='flex flex-row gap-[64px]'>
        <div className='flex flex-row gap-[10px] items-center w-[300px] px-[16px] py-[8px] border-solid rounded-[20px] border-black border-[1px] '>
          <IconSearch height={18} width={18} color='#6E706E' />
          <div>Search</div>
        </div>
        <div className='flex flex-row items-center gap-[32px]'>
          <Link to={"/wishlist"}><IconHeart/></Link>
          <Link to={"/cartproduct"}><IconCardproduct /></Link>
          <Link to={"/personal"}><IconPersonal /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header