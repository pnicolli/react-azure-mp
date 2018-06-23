export default (skin = 'amp-default') => {
  return new Promise((resolve, reject) => {
    if (document.querySelector('#amp-azure')) return resolve()
    let scriptTag = document.createElement('script')
    let linkTag = document.createElement('link')
    linkTag.rel = 'stylesheet'
    scriptTag.id = 'amp-azure'
    scriptTag.src = '//amp.azure.net/libs/amp/2.1.5/azuremediaplayer.min.js'
    linkTag.href = `//amp.azure.net/libs/amp/2.1.5/skins/${skin}/azuremediaplayer.min.css`
    document.body.appendChild(scriptTag)
    document.head.insertBefore(linkTag, document.head.firstChild)
    scriptTag.onload = () => resolve({ skin: skin })
  })
}
