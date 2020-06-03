
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const re = new RegExp('bitcoin', 'gi')
  const matches = document.documentElement.innerHTML.match(re)
  const re2 = new RegExp('btc', 'gi')
  const matches2 = document.documentElement.innerHTML.match(re2)
  sendResponse({count: matches.length, count2: matches2.length})
})
