import { NavLink } from 'react-router-dom';
import {headerItems} from './items';
import s from './header.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import {BsBasket3Fill  } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useState } from 'react';



const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};
const getItemList = (items) => {
  return items.map(({ id, text, to, end }) => (
    <NavLink className={getActiveClassName} key={id} to={to} end={end}>
      {text}
    </NavLink>))
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerElements = getItemList(headerItems);
  
  const basket = useSelector(state => state.basket);

  return (
    <>
      <div className={s.bar}>
        <NavLink className={s.item} to='/' >Logo</NavLink>
        <ul className={s.menu}>
          <li>
             <button className={s.btn} type='button' onClick={()=> setIsMenuOpen(prevstate => !prevstate)}>
        <AiOutlineMenu fill="white" />
        </button>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/basket' end><BsBasket3Fill fill="#ed9d9d" />{basket.length && <span className={s.number}> { basket.length}</span>}</NavLink>
          </li>
        </ul>
      </div>
      
      {isMenuOpen && <nav className={s.nav}>{headerElements}</nav> }
  </>
   )

};

export default Header;