const gameLib = require('./libs/gameLib.js');
const iframeCount = document.getElementById('bl-script').getAttribute('iframeCount');

// create four iframes and add them to the page
gameLib.createIframe(iframeCount);

// define key bindings
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 38) {
    // up arrow key
    gameLib.specificIframe(function (_win) {
      gameLib.pressJump(_win);
    },0); 
  } else if (event.keyCode === 81) {
    // q key
    gameLib.specificIframe(function (_win) {
      gameLib.pressJump(_win);
    },1);
  } else if (event.keyCode === 87) {
    // w key
    gameLib.specificIframe(function (_win) {
      gameLib.pressJump(_win);
    },2);
  } else if (event.keyCode === 32) {
    // space key
    gameLib.specificIframe(function (_win) {
      gameLib.pressJump(_win);
    },3);
  } else if (event.keyCode === 40) {
    // down arrow key
    gameLib.specificIframe(function (_win) {
      gameLib.downDuck(_win);
    },0);
  } else if (event.keyCode === 65) {
    // A key
    gameLib.specificIframe(function (_win) {
      gameLib.downDuck(_win);
    },1);
  } else if (event.keyCode === 83) {
    // S key
    gameLib.specificIframe(function (_win) {
      gameLib.downDuck(_win);
    },2);
  } else if (event.keyCode === 68) {
    // D key
    gameLib.specificIframe(function (_win) {
      gameLib.downDuck(_win);
    },3);
  }
  
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 40) {
    // down arrow key
    gameLib.specificIframe(function (_win) {
      gameLib.upDuck(_win);
    },0);
  } else if (event.keyCode === 65) {
    // A key
    gameLib.specificIframe(function (_win) {
      gameLib.upDuck(_win);
    },1);
  } else if (event.keyCode === 83) {
    // S key
    gameLib.specificIframe(function (_win) {
      gameLib.upDuck(_win);
    },2);
  } else if (event.keyCode === 68) {
    // D key
    gameLib.specificIframe(function (_win) {
      gameLib.upDuck(_win);
    },3);
  }
});

// check if all games have ended every 100ms
setInterval(function() {
  if (gameLib.isAllEnd()) {
    // restart all games
    gameLib.eachIframe(function (_win) {
      gameLib.restart(_win);
    });
  }
}, 1000);
