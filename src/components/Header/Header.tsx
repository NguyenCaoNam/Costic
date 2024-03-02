import IconCardproduct from '../../utils/icon/iconCardproduct'
import IconHeart from '../../utils/icon/iconHeart'
import IconPersonal from '../../utils/icon/iconPersonal'
import IconSearch from '../../utils/icon/iconSearch'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between py-[18px]'>
      <Navigation />
      <img className='w-auto h-[55px]' src="https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo.png" alt="" />
      <div className='flex flex-row gap-[64px]'>
        <div className='flex flex-row gap-[10px] items-center w-[300px] px-[16px] py-[8px] border-solid rounded-[20px] border-black border-[1px] '>
          <IconSearch height={18} width={18} color='#6E706E' />
          <div>Search</div>
        </div>
        <div className='flex flex-row items-center gap-[32px]'>
          <IconHeart />
          <IconCardproduct />
          <IconPersonal />
        </div>
      </div>
    </div>
  )
}

export default Header