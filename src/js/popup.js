function hello() {
  chrome.tabs.executeScript({
    file: 'src/js/lenghtConverter.js'
  }); 
}