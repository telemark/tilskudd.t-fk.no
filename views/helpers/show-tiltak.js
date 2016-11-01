'use strict'

module.exports = (document) => {
  const tiltak = document.tiltak
  var output = []

  output.push(`Navn: ${tiltak.navn}`)
  output.push(`Beskrivelse: ${tiltak.beskrivelse}`)
  output.push(`Periode: ${tiltak.startdato} - ${tiltak.sluttdato}`)
  output.push(`Frekvens: ${tiltak.antall}`)
  output.push(`Sted: ${tiltak.hvor}`)

  return output.join('<br/>')
}
