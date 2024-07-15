import React, { useEffect, useState } from 'react';
import CuentaService from '../../services/cuenta-service';
import Grid from '../Grid/Grid';

const Cuentas = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cuentas = await CuentaService.getCuentas();
      setCuentas(cuentas);
    };
    fetchData();
  }, []);

  const columns = [
    { header: 'Cuenta ID', accessor: 'cuentaId' },
    { header: 'Número de Cuenta', accessor: 'numeroCuenta' },
    { header: 'Saldo', accessor: 'saldo' },
    { header: 'Estado', accessor: 'estado' }
  ];

  return (
    <div>
      <h2>Lista de Cuentas</h2>
      <Grid columns={columns} data={cuentas} />
    </div>
  );
};

export default Cuentas;
