
var rolling = "https://giphy.com/embed/w1n9wmzQAwIRNIddf2/video";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

sleep(4000).then(() => { document.getElementById("myFrame").src = rolling; });
