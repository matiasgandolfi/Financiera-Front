import BaseService from './BaseService';

class CuentaService extends BaseService {
  constructor() {
    super('http://localhost:5153/api/Cuenta');
  }

  async getCuentas() {
    const data = await this.get('/');
    return data.resultado;
  }

  async getCuentaById(id) {
    return this.get(`/${id}`);
  }
}

const cuentaServiceInstance = new CuentaService();
export default cuentaServiceInstance;
