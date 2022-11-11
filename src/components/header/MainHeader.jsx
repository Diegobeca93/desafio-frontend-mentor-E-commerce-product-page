import LogoSneakers from '../../assets/images/logo.svg'
import ImageAvatar from '../../assets/images/image-avatar.png'
import MenuIcon from '../icons/menuIcon';
import CartIcon from '../icons/CartIcon';
import CloseIcon from '../icons/CloseIcon';
import { useState } from 'react';
import NavLinks from './NavLinks';


const MainHeader = () => {
  const [navClass, setNavClass]=useState('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row gap-4 ')
  
  const handleOpenMenu = () => {
    setNavClass('absolute top-0 left-0 h-full w-4/5 p-8 gap-y-5 font-bold flex flex-col md:flex-row gap-4 md:mr-auto md:static md:h-auto bg-white')
  }
  const HandleClose = () => {
    setNavClass('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row gap-4')
  }

  return (
    <>  
      <header className='flex container mx-auto items-center gap-8'>
        <button className="md:hidden py-8 pl-4" onClick={handleOpenMenu}>
            <MenuIcon />
        </button>
        <img 
          src={LogoSneakers} 
          alt="logo Sneakers" 
          className='mr-auto md:mr-0 h-5 mb-1'
        />
        <nav className={navClass}>
          <button className='mb-10 md:hidden' onClick={HandleClose}> 
            <CloseIcon /> 
          </button>
          <NavLinks text='Collections'/>
          <NavLinks text='Men'/>
          <NavLinks text='Women'/>
          <NavLinks text='About'/>
          <NavLinks text='Contact'/>
        </nav>
        <div className='flex gap-4 items-center pr-4'>
          <button>
            <CartIcon />
          </button>
          <img src={ImageAvatar} alt="" className='w-6'/>
        </div>
      </header> 
      <span className='hidden md:block h-[1px] bg-slate-400 w-full container mx-auto '/>
    </>
  ); 
};
export default MainHeader;
