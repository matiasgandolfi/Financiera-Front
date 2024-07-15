import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UsuarioService from '../../services/usuario-service';
import './Login.css'; // Importa el archivo CSS para estilos personalizados

const Login = () => {
  const [formLogin, setFormLogin] = useState({ username: '', password: '' });
  const [mostrarLoading, setMostrarLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevFormLogin) => ({
      ...prevFormLogin,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMostrarLoading(true);

    try {
      const response = await UsuarioService.iniciarSesion(formLogin);
      console.log('Respuesta '+ response);
      UsuarioService.guardarSesion(response);
      Cookies.set('Authorization', `Bearer ${response.token}`, { path: '/', secure: true, sameSite: 'Strict' });
      navigate('/');
    } catch (error) {
      alert('Error: ' + error.message); // Simple alert for now, replace with better error handling if needed
    } finally {
      setMostrarLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formLogin.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formLogin.password} onChange={handleChange} required />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {mostrarLoading && <p>Cargando...</p>}
      </form>
    </div>
  );
};

export default Login;
