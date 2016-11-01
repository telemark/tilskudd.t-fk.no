'use strict'

function getArtSubCategory (data) {
  if (Array.isArray(data)) {
    return data.join(', ')
  } else {
    return data
  }
}

module.exports = (document) => {
  const tiltak = document.tiltak
  const finanser = document.finanser
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

  if (/folkehelse/.test(document.formal.formal)) {
    output.push(`Kategori: ${document.kategorierfolkehelse.kategorier}`)
  }
  if (/idrett/.test(document.formal.formal)) {
    output.push(`Kategori: ${document.kategorieridrett.kategorier}`)
  }
  if (/kultur/.test(document.formal.formal)) {
    output.push(`Kategori: ${document.artform.artform} - ${getArtSubCategory(document.kategorier.kategorier)}`)
  }

  output.push(`Beskrivelse: ${tiltak.beskrivelse}`)
  output.push(`Periode: ${tiltak.startdato} - ${tiltak.sluttdato}`)
  output.push(`Frekvens: ${tiltak.antall}`)
  output.push(`Sted: ${tiltak.hvor}`)

  output.push('<h3>Økonomi</h3>')
  output.push(`Søkebeløp: ${finanser.soknadsSum}`)
  output.push(`Total kostnadsramme: ${finanser.totalRamme}`)
  output.push(`Egne midler: ${finanser.egneMidler}`)
  output.push(`Andre midler (søkt om eller innvilget): ${finanser.andreMidler}`)

  output.push('<h3>Samarbeidsparter</h3>')
  if (document.collaboration.samarbeid === 'ja') {
    if (document.partners && document.partners.partner) {
      if (Array.isArray(document.partners.partner)) {
        output.push(`${document.partners.partner.join(', ')}`)
      } else {
        output.push(`${document.partners.partner}`)
      }
    }
    output.push(`${document.samarbeidsparter.beskrivelse}`)
  } else {
    output.push('Ingen samarbeidsparter')
  }

  return output.join('<br/>')
}
