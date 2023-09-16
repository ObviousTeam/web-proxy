function UpdateSearchHistory() {
  const iframeContainer = document.getElementById(currentTab);
	const iframe = iframeContainer.querySelector('iframe');
  decryptedURL = decryptURL(iframe.contentWindow.location.href)
  if(decryptedURL == "iframe not loaded") {
    return
  }
  try {
    searchHistory = localStorage.getItem("searchHistory")
    updateSearchHistory = searchHistory.insert(0, decryptedURL)
    localStorage.setItem("searchHistory", updateSearchHistory)
  } catch {
    localStorage.setItem("searchHistory", [decryptedURL])
  }
}

function ReadHistory() {
  return localStorage.getItem("searchHistory")
}