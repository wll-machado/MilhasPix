import Logo from '../assets/images/logo.svg';


const Header = () => {
  return (
    <header className="w-full h-15 bg flex items-center justify-between px-8 py-3" >
      <img src={Logo} alt="Milhaspix logo" />
      <span className='text border-1 rounded-full px-4 py-1.5'>R$ 283,12</span>
    </header>
  )
}

export default Header
