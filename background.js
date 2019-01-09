const tabChanged = (id) => {
  chrome.tabs.sendMessage(id, true)
}

const windowChanged = (id) => {
  if (id !== -1)
    chrome.tabs.getSelected(id, (data) => {
      // console.log(data)
      if (data !== undefined) {
        tabChanged(data.id)
      }
    })
}

chrome.tabs.onActiveChanged.addListener(tabChanged)
chrome.windows.onFocusChanged.addListener(windowChanged)

