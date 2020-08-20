export default function calculaJurosCompostos(valorInicial, taxaMensal, periodo) {
  valorInicial = Number(valorInicial)
  taxaMensal = Number(taxaMensal)
  periodo = Number(periodo)

  // console.log(`valorInicial ${valorInicial}`)
  // console.log(`taxaMensal ${taxaMensal}`)
  // console.log(`periodo ${periodo}`)
  const parcelas = []

  for (var n = 1; n <= periodo; n++) {
    let taxaTotal = Math.pow((1 + taxaMensal/100), n)
    const valorMontante = valorInicial * taxaTotal 
    const valorJuros = valorMontante - valorInicial

    taxaTotal = (taxaTotal - 1) * 100; 

    const parcela = 
      { periodo: n, 
        taxaTotal: taxaTotal.toFixed(2), 
        valorMontante: valorMontante.toFixed(2), 
        valorJuros: valorJuros.toFixed(2)
      }

    parcelas.push(parcela);
  }

  // console.log(parcelas)
  return parcelas 
}

