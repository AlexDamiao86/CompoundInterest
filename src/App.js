import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Installments from './components/Installments/Installments';

import calculaJurosCompostos from './calculo.js';

export default function App() {
  const [valorInicial, setValorInicial] = useState(1000.00);
  const [taxaMensal, setTaxaMensal] = useState(0.5);
  const [periodo, setPeriodo] = useState(1);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    const parcelas = calculaJurosCompostos(valorInicial, taxaMensal, periodo);
    setParcelas(parcelas);
  }, [valorInicial, taxaMensal, periodo])

  const handleChangeValues = ( { valorInicial, taxaMensal, periodo } ) => {
    setValorInicial(valorInicial); 
    setTaxaMensal(taxaMensal);
    setPeriodo(periodo);
  }

  return (
    <div>
      <Header />
      <Form 
        valorInicial={valorInicial}
        taxaMensal={taxaMensal}
        periodo={periodo}
        onChangeValues={handleChangeValues}
        /> 
      {parcelas.length > 0 && (
        <Installments parcelas={parcelas} /> 
      )}  
    </div>
  );
}
