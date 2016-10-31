'use strict'

module.exports = (brreg) => {
  const data = {
    organisasjonsNummer: brreg.orgnr,
    organisasjonsNavn: brreg.navn,
    kontoNummer: '',
    adresse: '',
    kommune: brreg.forradrkommnavn,
    fylke: '',
    telefonNummer: brreg.tlf,
    epost: ''
  }

  return data
}
