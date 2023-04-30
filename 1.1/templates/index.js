const gameLib = require('./libs/gameLib.js');
//get iframeCount from localstorage
const iframeCount = localStorage.getItem("player");
if (iframeCount == null){
  iframeCount = 1;
}

// create four iframes and add them to the page
gameLib.createIframe(iframeCount);

// define key bindings
// up arrow key: jump 0
// q key: jump 1
// w key: jump 2
// space key: jump 3
// down arrow key: duck 0
// a key: duck 1
// s key: duck 2
// d key: duck 3
// p key: accelerate 0
// i key: accelerate 1
// j key: accelerate 2
// k key: accelerate 3
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
  } else if (event.keyCode === 80) {
    // P Key
    gameLib.exceptspecificIframe(function (_win){
      gameLib.accelerate(_win)
    },0)
  } else if (event.keyCode === 73) {
    // I Key
    gameLib.exceptspecificIframe(function (_win){
      gameLib.accelerate(_win)
    },1)
  } else if (event.keyCode === 74) {
    // J Key
    gameLib.exceptspecificIframe(function (_win){
      gameLib.accelerate(_win)
    },2)
  } else if (event.keyCode === 75) {
    // K Key
    gameLib.exceptspecificIframe(function (_win){
      gameLib.accelerate(_win)
    },3)
  }
  
});

// down arrow key: stop ducking 0
// a key: stop ducking 1
// s key: stop ducking 2
// d key: stop ducking 3
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
    score = gameLib.getScore();
    var text = document.createElement("p");
        text.style.textAlign = "center";
        text.style.fontSize = "10px";
        text.style.color = "black";
        text.style.fontFamily = "Arial";
        text.style.position = "absolute";
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.transform = "translate(-50%, -50%)";
        text.innerHTML = "Game Over! Your score is " + score;
        document.body.appendChild(text);
        console.log(score)

        //store the score in localstorage
        localStorage.setItem("score", score);

        //redirect to the score page
        window.location.href = "/end";

        // restart the game
        gameLib.eachIframe(function (_win) {
          gameLib.restart(_win);
        },0); 
  }
}, 1000);
