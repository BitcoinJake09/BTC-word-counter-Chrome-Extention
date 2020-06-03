document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onClick, false)

function onClick() {
  chrome.tabs.query({currentWindow: true, active: true},
  function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'Bitcoin Counted:', setCount)
  })
}

  function setCount (res) {
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    try {
      div.textContent = `${res.count} bitcoin`
      document.body.appendChild(div)
    } catch(exception) {
      div.textContent = `0 bitcoin found`
      document.body.appendChild(div)
    }
    try {
      div2.textContent = `${res.count2} btc`
      document.body.appendChild(div2)
    } catch(exception) {
      div2.textContent = `0 btc found`
      document.body.appendChild(div2)
    }
  }

}, false)
