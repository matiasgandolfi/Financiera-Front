import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import BaseService from './BaseService';

class UsuarioService extends BaseService {
  constructor() {
    super('http://localhost:5153/api/Usuario');
  }

  async iniciarSesion(request) {
    const data = await this.post('/login', request);
    return data;
  }

  guardarSesion(sesion) {
    console.log('Guardando sesión:', sesion);
    localStorage.setItem("usuarioSesion", JSON.stringify(sesion.userName));
  }

  obtenerSesion() {
    const sesionString = localStorage.getItem("usuarioSesion");
    const usuarioSesion = sesionString ? JSON.parse(sesionString) : null;
    return usuarioSesion;
  }

  eliminarSesion() {
    localStorage.removeItem("usuarioSesion");
    Cookies.remove('Authorization'); // Elimina el token de autenticación
  }

  isAuthenticated() {
    const usuario = this.obtenerSesion();
    let token = Cookies.get('Authorization');

    if (token && usuario) {
      token = token.replace('Bearer ', '');
      const decodedToken = jwtDecode(token);
      const fechaExpiracion = decodedToken.exp * 1000;
      const fechaActual = new Date().getTime();
      if (fechaExpiracion < fechaActual) {
        return false;
      }
      return true;
    }
    return false;
  }
}

const usuarioServiceInstance = new UsuarioService();
export default usuarioServiceInstance;
