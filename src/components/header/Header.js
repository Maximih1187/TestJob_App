import React from 'react';
import './header.css';
import menuImg from './icons/menu.png'
import menuBack from './icons/iconsBack.png'

const Header = () => {
      return (

            <header className='header'>
                  <div className='header__menu'>
                        <img src={menuImg} alt="кнопка меню" />
                  </div>
                  <div className='header_back'>
                        <img src={menuBack} alt="кнопка назад" />
                  </div>
                  <div className='header_view'>Просмотр</div>
                  <div className='header_management'>Управление</div>
            </header>


      );
}

export default Header;
