var gameLib = require("./libs/gameLib.js");
var setZeroTimeout = require("./libs/zeroTimeout.js");
var gameStates = [
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null }
];

gameLib.createIframe(4);

setTimeout(function () {
  setZeroTimeout(function () {
    gameLib.eachIframe(function (_win, _index) {
      gameStates[_index].tRex = _win.Runner.instance_.tRex;
      gameStates[_index].gameOverPanel = _win.document.querySelector(".gameover-panel");

      _win.document.addEventListener("keydown", function (event) {
        var key = event.key;

        switch (key) {
          case "q":
          case "i":
          case "j":
            gameLib.pressJump(_win);
            break;

          case "w":
          case "o":
          case "k":
            gameLib.downDuck(_win);
            break;

          case "e":
          case "p":
          case "l":
            if (_win.Runner.instance_.tRex.ducking && !_win.Runner.instance_.tRex.jumping) {
              gameLib.upDuck(_win);
            }
            break;

          default:
            break;
        }
      });

      setZeroTimeout(function () {
        var nowState = [
          _win.Runner.instance_.tRex.jumping ? 1 : 0,
          !_win.Runner.instance_.tRex.ducking && !_win.Runner.instance_.tRex.jumping ? 1 : 0,
          _win.Runner.instance_.tRex.ducking ? 1 : 0,
        ];

        if (_index === 0) {
          if (nowState[0] === 1) {
            gameLib.pressJump(_win);
          } else if (nowState[2] === 1) {
            gameLib.downDuck(_win);
          }

          if (nowState[1] === 1 && _win.Runner.instance_.tRex.ducking && !_win.Runner.instance_.tRex.jumping) {
            gameLib.upDuck(_win);
          }
        }
      });
    });
  });
}, 1000);
