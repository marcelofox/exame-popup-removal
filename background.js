document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('removeBtn');
    checkPageButton.addEventListener('click', function() {
      
      chrome.tabs.executeScript({
        file: 'remover.js'
      }); 

    }, false);
  }, false);