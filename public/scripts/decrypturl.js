function decryptURL(iframeURL) {
  removeURL1 = iframeURL.split('/proxy/')
  if(removeURL1 == "about:blank") {
    return "iframe not loaded"
  }
  removeURL2 = removeURL1[1]
  removeURL3 = removeURL2.split('/')
  realURL = atob(removeURL3[0])
  if(removeURL3[1]) {
    removeURL4 = removeURL3.slice(1)
    realURL = realURL + '/' + removeURL4.join('')
  }
  return realURL
}