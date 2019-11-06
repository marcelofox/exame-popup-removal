document.getElementById('piano_offer').remove();

var overlay = document.getElementsByClassName('piano-offer-overlay')

if (overlay.length > 0){
    overlay[0].remove();
    }

var bodyVar = document.getElementsByTagName('body');
bodyVar[0].style.overflowY = "auto";
bodyVar[0].style.overflowX = "auto";
