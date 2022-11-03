import LogoSneakers from '../../assets/images/logo.svg'
import ImageAvatar from '../../assets/images/image-avatar.png'
import MenuIcon from '../icons/menuIcon';
import CartIcon from '../icons/CartIcon';
import CloseIcon from '../icons/CloseIcon';
import { useState } from 'react';

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
      <header className='flex container mx-auto px-4 items-center gap-8 bg-gray-400 py-8'>
        <button className="md:hidden" onClick={handleOpenMenu}>
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
          <a href="#"> Collections</a>
          <a href="#">Men</a> 
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className='flex gap-4 items-center'>
          <button>
            <CartIcon />
          </button>
          <img src={ImageAvatar} alt="" className='w-6'/>
        </div>
      </header> 
    </>
  );
};
export default MainHeader;
