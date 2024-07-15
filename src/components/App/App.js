import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../pages/Home/Home';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import './App.css';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Cuentas from '../Cuentas/Cuentas';


function App() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);

  const handleToggleMenu = useCallback(() => {
    setIsMenuExpanded(prevState => !prevState);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuExpanded(false);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar onToggleMenu={handleToggleMenu} />
        <Menu isExpanded={isMenuExpanded} handleClose={handleCloseMenu} />
        <main className={`main-content ${isMenuExpanded ? 'menu-open' : ''}`}>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cuentas" element={<Cuentas />} />
            {/* <Route path="/perfil" element={<Perfil />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Añade más rutas según sea necesario */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;







// /* Paleta de colores */
// :root {
//   --color-dark-blue: #1B2430; /* Azul oscuro */
//   --color-light-gold: #D4AF37; /* Dorado claro */
//   --color-off-white: #EAEAEA; /* Blanco crudo */
//   --color-building-shadow: #555555; /* Sombra del edificio */
//   --color-road: #2E2E2E; /* Color de la carretera */
//   --color-sky-night: #0D1826; /* Color del cielo nocturno */
//   --color-light-shadow: rgba(255, 255, 255, 0.2); /* Difuminado */
// }

// /* Estilos para los componentes */
// body {
//   background-color: var(--color-sky-night);
//   color: var(--color-off-white);
//   font-family: Arial, sans-serif;
// }

// .Navbar {
//   background-color: var(--color-dark-blue);
//   color: var(--color-off-white);
//   padding: 10px;
// }

// .MenuSidebar {
//   background-color: var(--color-dark-blue);
//   color: var(--color-off-white);
//   width: 250px;
//   height: 100vh;
//   position: fixed;
// }

// .Contenido {
//   margin-left: 260px;
//   padding: 20px;
//   background: linear-gradient(to bottom, var(--color-sky-night), var(--color-light-shadow));
// }

// h1, h2, h3, p {
//   color: var(--color-off-white);
// }

// .Botones {
//   background-color: var(--color-light-gold);
//   color: var(--color-dark-blue);
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// }

// .Botones:hover {
//   background-color: var(--color-dark-blue);
//   color: var(--color-light-gold);
// }














// /* Paleta de colores */
// :root {
//   --color-blue: #5085A0; /* Azul */
//   --color-gold: #D4AF37; /* Dorado */
//   --color-off-white: #F5F5DC; /* Blanco crudo */
//   --color-building-shadow: #C1C1C1; /* Sombra del edificio */
//   --color-road: #999999; /* Color de la carretera */
//   --color-sky: #A9B9C8; /* Color del cielo */
//   --color-light-shadow: rgba(255, 255, 255, 0.7); /* Difuminado */
// }

// /* Estilos para los componentes */
// body {
//   background-color: var(--color-off-white);
//   color: var(--color-blue);
//   font-family: Arial, sans-serif;
// }

// .Navbar {
//   background-color: var(--color-gold);
//   color: var(--color-blue);
//   padding: 10px;
// }

// .MenuSidebar {
//   background-color: var(--color-blue);
//   color: var(--color-off-white);
//   width: 250px;
//   height: 100vh;
//   position: fixed;
// }

// .Contenido {
//   margin-left: 260px;
//   padding: 20px;
//   background: linear-gradient(to bottom, var(--color-off-white), var(--color-light-shadow));
// }

// h1, h2, h3, p {
//   color: var(--color-blue);
// }

// .Botones {
//   background-color: var(--color-gold);
//   color: var(--color-blue);
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// }

// .Botones:hover {
//   background-color: var(--color-blue);
//   color: var(--color-gold);
// }
