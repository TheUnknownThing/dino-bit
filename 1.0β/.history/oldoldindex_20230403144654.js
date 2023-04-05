const gameLib = require('./libs/gameLib.js');

// create four iframes and add them to the page
gameLib.createIframe(4);

// define key bindings
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 38) {
    // up arrow key
    gameLib.specificIframe(function (_win) {
      gameLib.pressJump(_win);
    },0); 
  }
  else if (event.keyCode === 87) {
    // down arrow key
    gameLib.specificIframe(function (_win) {
      gameLib.downDuck(_win);
    },1);
  }
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 40) {
    // up arrow key
    gameLib.eachIframe(function (_win) {
      gameLib.upDuck(_win);
    });
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
}, 100);
