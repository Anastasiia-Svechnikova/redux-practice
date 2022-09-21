import { NavLink } from 'react-router-dom';
import headerItems from './items';
import s from './header.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const Header = () => {
  const elements = headerItems.map(({ id, text, to, end }) => (
    <NavLink className={getActiveClassName} key={id} to={to} end={end}>
      {text}
    </NavLink>
  ));

  return elements;
};

export default Header;