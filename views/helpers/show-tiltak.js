'use strict'

module.exports = (document) => {
  const tiltak = document.tiltak
  var output = []

  output.push(`Navn: ${tiltak.navn}`)

  if (document.formal && document.formal.formal) {
    output.push(`Formål: ${document.formal.formal}`)
  }

  if (document.target && document.target.target) {
    if (Array.isArray(document.target.target)) {
      output.push(`Målgrupper: ${document.target.target.join(', ')}`)
    } else {
      output.push(`Målgruppe: ${document.target.target}`)
    }
  }

  output.push(`Beskrivelse: ${tiltak.beskrivelse}`)
  output.push(`Periode: ${tiltak.startdato} - ${tiltak.sluttdato}`)
  output.push(`Frekvens: ${tiltak.antall}`)
  output.push(`Sted: ${tiltak.hvor}`)

  return output.join('<br/>')
}
