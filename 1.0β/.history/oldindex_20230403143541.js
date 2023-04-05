const gameLib = require('./gameLib');

// create four iframes and add them to the page
gameLib.createIframe(4);

// define key bindings
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 38) {
    // up arrow key
    gameLib.eachIframe(function (_win) {
      gameLib.pressJump(_win);
    });
  } else if (event.keyCode === 40) {
    // down arrow key
    gameLib.eachIframe(function (_win) {
      gameLib.downDuck(_win);
    });
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
