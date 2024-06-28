import './navbar.css'
import icomDown from './icons/iconDown.png'

const Navbar = () => {
      return (
            <div className='navbar'>
                  <div className="navbar__project">
                        <img className='navbar__project-icon' src={icomDown} alt="" />
                        <p className='navbar__project-nameproject'>Название проекта</p>
                        <p className='navbar__project-abbreviation' >Аббревиатура</p>
                  </div>
            </div>
      );
}

export default Navbar;
