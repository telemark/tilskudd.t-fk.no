'use strict'

module.exports = (brreg) => {
  const data = {
    organisasjonsNummer: brreg.orgnr,
    organisasjonsNavn: brreg.navn,
    kontoNummer: '',
    adresse: `${brreg.forretningsadr}, ${brreg.forradrpostnr} ${brreg.forradrpoststed}`,
    telefonNummer: brreg.tlf,
    epost: ''
  }

  return data
}
