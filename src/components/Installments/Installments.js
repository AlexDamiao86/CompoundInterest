import React from 'react'
import Installment from '../Installment/Installment'

export default function Installments({ parcelas }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {parcelas.map((parcela) => (
        <Installment 
          key={parcela.periodo} 
          parcela={parcela} />
        )
      )}  
    </div>
  )
}
