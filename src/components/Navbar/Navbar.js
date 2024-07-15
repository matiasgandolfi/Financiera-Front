import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaEnvelope, FaBars } from 'react-icons/fa'; // Importa los iconos que necesitas
import 'bootstrap/dist/css/bootstrap.min.css';
import logo  from '../../img/logo-light.jpg.png'
import './Navbar.css';

const Navbar = ({ onToggleMenu }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button 
            className="btn btn-primary" 
            type="button" 
            onClick={onToggleMenu}
            >
            <FaBars />
        </button>
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="Descripción de la imagen" style={{width: '50px', paddingTop: '10px'}}/>
        </Link>


        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/"><FaHome /> Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/perfil"><FaUserAlt /> Perfil</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact"><FaEnvelope /> Contact</Link>
            </li>
            </ul>
        </div>
        </nav>    
  );
};

export default Navbar;
