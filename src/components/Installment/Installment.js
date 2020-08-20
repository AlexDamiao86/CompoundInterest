import React from 'react';
import { formatNumber } from '../../helpers/formatCurrency';

export default function Installment({ parcela, children }) {
  const { periodo, taxaTotal, valorMontante, valorJuros } = parcela;
  const valorStyle = 
    taxaTotal >= 0 ? styles.valorPositivo : styles.valorNegativo;
  const taxaStyle = 
    taxaTotal >= 0 ? styles.taxaPositiva : styles.taxaNegativa;
  const stringValorJuros = 
    valorJuros >= 0 ? `+${formatNumber(valorJuros)}`
                    : formatNumber(valorJuros)

  return (
    <div>
      <div style={styles.containerStyle}>
        <div style={styles.periodoStyle}>{periodo}</div>
        <div style={styles.columnStyle}>
          <div><span style={valorStyle}>{formatNumber(valorMontante)}</span></div>
          <div><span style={valorStyle}>{stringValorJuros}</span></div>
          <div><span style={taxaStyle}>{taxaTotal}%</span></div>
        </div>
      </div>
    </div>
  )
}

const styles = { 
  containerStyle: { 
    border: '1px solid gray',
    borderRadius: '4px',
    width: '230px',
    height: '100px',
    margin: '5px',
    display: 'flex', 
    flexDirection: 'row'
  },

  columnStyle: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
    padding: '15px', 
    width: '150px'
  },

  periodoStyle: { 
    margin: '30px',
    fontSize: '1.5rem',
    fontWeight: 'bold', 
  }, 

  valorNegativo: { 
    fontWeight: 'bold',
    color: 'red',
  },

  valorPositivo: { 
    fontWeight: 'bold',
    color: 'green',
  },

  taxaNegativa: { 
    color: 'orange'
  },

  taxaPositiva: { 
    color: 'blue'
  }
}

 



