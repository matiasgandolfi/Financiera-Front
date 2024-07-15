// src/context/CuentaContext.js
import React, { createContext, useState } from 'react';
import { CuentaModel } from '../models/CuentaModel';

export const CuentaContext = createContext();

export const CuentaProvider = ({ children }) => {
  const [cuentas, setCuentas] = useState([CuentaModel]);

  return (
    <CuentaContext.Provider value={{ cuentas, setCuentas }}>
      {children}
    </CuentaContext.Provider>
  );
};
