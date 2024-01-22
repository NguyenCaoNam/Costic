import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <Navigation />
      <img className='w-auto h-[55px]' src="https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo.png" alt="" />
    </div>
  )
}

export default Header