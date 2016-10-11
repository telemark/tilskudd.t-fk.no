'use strict'

const idSite = 5
const piwikTrackingApiUrl = 'https://piwik.service.t-fk.no/piwik.php';

var _paq = _paq || []
_paq.push(['setTrackerUrl', piwikTrackingApiUrl])
_paq.push(['setSiteId', idSite])
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])