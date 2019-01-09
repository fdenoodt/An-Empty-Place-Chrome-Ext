const lsHiddenItems = [];
let lsKeysPressed = [];

const onHandleClick = (theEvent) => {
  if (lsKeysPressed.includes(16)) {
    theEvent.preventDefault()
    const item = (theEvent.srcElement);
    item.style.display = "none"
    lsHiddenItems.push(item);
  }
}

window.onkeydown = function (e) {
  const countHiddenItems = lsHiddenItems.length;

  var key = e.keyCode ? e.keyCode : e.which;
  lsKeysPressed.push(key);

  if (countHiddenItems <= 0)
    return;
  if (lsKeysPressed.includes(90) && lsKeysPressed.includes(17)) {
    lsHiddenItems[countHiddenItems - 1].style.display = "block";
    lsHiddenItems.splice(countHiddenItems - 1, 1)
  }
}

window.onkeyup = function (e) {
  var key = e.keyCode ? e.keyCode : e.which;
  while (lsKeysPressed.includes(key))
    lsKeysPressed.splice(lsKeysPressed.indexOf(key), 1);
}

document.addEventListener('click', onHandleClick)


chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    console.log(lsKeysPressed);
    lsKeysPressed = [];
    console.log(lsKeysPressed);
    
  });