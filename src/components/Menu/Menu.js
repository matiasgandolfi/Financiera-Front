import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMoneyCheckAlt, FaExchangeAlt, FaChartLine } from 'react-icons/fa'; // Asegúrate de importar FaHome
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import logo  from '../../img/logo-dark.png'


const Menu = ({ isExpanded, handleClose }) => {

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> }, // Añadido el link para Home
    { path: '/cuentas', label: 'Cuentas', icon: <FaMoneyCheckAlt /> },
    { path: '/transferencias', label: 'Transferencias', icon: <FaExchangeAlt /> },
    { path: '/inversiones', label: 'Inversiones', icon: <FaChartLine /> },
  ];

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} id="sidebar">
      <div className="sidebar-header">
        <h5 className="sidebar-title"><img src={logo} alt="Descripción de la imagen" style={{width: '50px'}}/> Banco ficticio</h5>
        <button type="button" className="btn-close text-reset" aria-label="Close" onClick={handleClose}>X</button>
      </div>
      <div className="sidebar-body">
        <ul className="navbar-nav">
          {navLinks.map(({ path, label, icon }) => (
            <li key={path} className="nav-item">
              <Link 
                className='menu-link' 
                to={path} 
                onClick={handleClose}
                style={{color: 'white', textDecoration: 'none'}}
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
