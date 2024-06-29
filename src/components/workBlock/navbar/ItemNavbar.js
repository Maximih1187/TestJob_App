import React from 'react';
import iconKubik from './icons/iconKubik.png'
import './itemNavbar.css'

const ItemNavbar = (props) => {
      console.log(props.text);
      return (
            <div className='navbar__item'>
                  <img className='navbar__item-icon' src={iconKubik} alt="" />
                  <p className='navbar__item-text'>{props.text}</p>
            </div>
      );
}

export default ItemNavbar;
