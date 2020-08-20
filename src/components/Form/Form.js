import React from 'react'

export default function Form(
  { valorInicial, 
    taxaMensal, 
    periodo, 
    onChangeValues }) {

  const handleInputCapital = (event) => {
    const newValorInicial = Number(event.target.value); 
    onChangeValues(
      { valorInicial: newValorInicial, 
        taxaMensal: taxaMensal, 
        periodo: periodo });
  }

  const handleInputTaxa = (event) => {
    const newTaxa = Number(event.target.value); 
    onChangeValues(
      { valorInicial: valorInicial, 
        taxaMensal: newTaxa, 
        periodo: periodo });
  }

  const handleInputPeriodo = (event) => {
    const newPeriodo = Number(event.target.value); 
    onChangeValues(
      { valorInicial: valorInicial, 
        taxaMensal: taxaMensal,
        periodo: newPeriodo });
  }

  return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s4">
          <span>Montante inicial:</span>
          <input type="number" id="capital" min="0" max="100000" step="1000" 
            value={valorInicial} onChange={handleInputCapital}/>
        </div>
        <div className="input-field col s4">
          <span>Taxa de juros mensal:</span>
          <input type="number" id="taxa" min="-12" max="12" step="0.5" 
            value={taxaMensal} onChange={handleInputTaxa}/>
        </div>
        <div className="input-field col s4">
          <span>Periodo (meses):</span>
          <input type="number" id="periodo" min="1" max="36" step="1" 
            value={periodo} onChange={handleInputPeriodo}/>
        </div>
      </div>
    </form>
    </div>
  )
}

