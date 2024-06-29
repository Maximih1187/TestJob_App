import './navbar.css'
import icomDown from './icons/iconDown.png'
import ItemNavbar from './ItemNavbar';

const Navbar = () => {

      const text = [
            "По проекту", "Объекты", "РД", "МТО", "График", "МиМ", "Рабочее", "Капвложения", "Бюджет", "Финансирование", "Панорама", "Камеры", "Поручения", "Контрагенты"
      ]





      return (
            <div className='navbar'>
                  <div className="navbar__project">
                        <img className='navbar__project-icon' src={icomDown} alt="" />
                        <p className='navbar__project-nameproject'>Название проекта</p>
                        <p className='navbar__project-abbreviation' >Аббревиатура</p>
                  </div>
                  {text.map(item => <ItemNavbar text={item} />)}

            </div>
      );
}

export default Navbar;
