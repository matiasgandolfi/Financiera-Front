import React, { useState } from 'react';
import './CreateCuentas.css';
import CuentaService from '../../../services/cuenta-service';

const CreateCuentas = ({ setOpenModal }) => {
  const [newCuenta, setNewCuenta] = useState({
    numeroCuenta: '',
    saldo: '',
    estado: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await CuentaService.createCuenta(newCuenta);
      setOpenModal(false);
      window.location.reload();
    } catch (error) {
      console.error('Error creando la cuenta:', error);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewCuenta((prevNewCuenta) => ({
      ...prevNewCuenta,
      [name]: value
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Crear Nueva Cuenta</label>
      <input
        type="text"
        name="numeroCuenta"
        placeholder="Número de Cuenta"
        value={newCuenta.numeroCuenta}
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="saldo"
        placeholder="Saldo"
        value={newCuenta.saldo}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={newCuenta.estado}
        onChange={onChange}
        required
      />
      <div className="CreateCuentas-buttonContainer">
        <button
          type="button"
          className="CreateCuentas-button CreateCuentas-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="CreateCuentas-button CreateCuentas-button--add"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default CreateCuentas;
