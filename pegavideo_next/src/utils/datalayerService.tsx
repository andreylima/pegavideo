import TagManager from 'react-gtm-module'

export default function DatalayerService (): any {
  function decode (str: string) {
    if (!str) return ''
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec)
    })
  }

  async function sendCustomEvent (eventName: string, pageName: string, label: string, area: string) {
    await TagManager.dataLayer({
      dataLayer: {
        event: decode(eventName),
        origem: decode(pageName),
        label: decode(label),
        area: decode(area)
      }
    })
  }

  return {
    sendCustomEvent
  }
}
