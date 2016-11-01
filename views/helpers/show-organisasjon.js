'use strict'

module.exports = (document) => {
  const organisasjon = document.organisasjon
  var output = []

  output.push(`Navn: ${organisasjon.organisasjonsNavn}`)
  output.push(`Organisasjonsnummer: ${organisasjon.organisasjonsNummer}`)
  output.push(`Kontonummer: ${organisasjon.kontoNummer}`)
  output.push(`Telefon: ${organisasjon.telefonNummer}`)
  output.push(`E-post: ${organisasjon.epost}`)
  output.push(`Adresse: ${organisasjon.adresse}`)
  output.push(`Kommune: ${organisasjon.kommune}`)
  output.push(`Fylke: ${organisasjon.fylke}`)

  return output.join('<br/>')
}
