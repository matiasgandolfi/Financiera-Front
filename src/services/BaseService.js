import Cookies from 'js-cookie';

class BaseService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(url, options = {}) {
    const token = Cookies.get('Authorization');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(token ? { 'Authorization': token } : {}),
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la solicitud');
    }

    return response.json();
  }

  async get(endpoint) {
    return this.request(`${this.baseURL}${endpoint}`, {
      method: 'GET',
    });
  }

  async post(endpoint, data) {
    return this.request(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update(endpoint, data) {
    return this.request(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
    });
  }
}

export default BaseService;
