var gameLib = require("./libs/gameLib.js");
var setZeroTimeout = require("./libs/zeroTimeout.js");
var gameStates = [
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null }
];
setTimeout(function () {
  gameLib.createIframe(4);
  setZeroTimeout(function () {
    gameLib.eachIframe(function (_win) {
      gameStates[_win.index].tRex = _win.Runner.instance_.tRex;
      gameStates[_win.index].gameOverPanel =
        _win.document.querySelector(".gameover-panel");
      gameLib.pressJump(_win);
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
            if (_win.Runner.instance_.tRex.ducking &&
              !_win.Runner.instance_.tRex.jumping) {
              gameLib.upDuck(_win);
            }
            break;
          default:
            break;
        }
      });
    });
    setZeroTimeout(function () {
      gameLib.eachIframe(function (_win, _index) {
        var nowState = [
          _win.Runner.instance_.tRex.jumping ? 1 : 0,
          !_win.Runner.instance_.tRex.ducking && !_win.Runner.instance_.tRex.jumping ? 1 : 0,
          _win.Runner.instance_.tRex.ducking ? 1 : 0,
        ];

        var controllerAIInput = [0, 0, 0].concat(nowState);

        if (_index === 0) {
          if (event.keyCode == 81 || event.keyCode == 73 || event.keyCode == 74) {
            gameLib.pressJump(_win);
          } else if (event.keyCode == 87 || event.keyCode == 79 || event.keyCode == 75) {
            gameLib.downDuck(_win);
          }
          if (event.keyCode == 69 || event.keyCode == 80 || event.keyCode == 76) {
            if (_win.Runner.instance_.tRex.ducking &&
              !_win.Runner.instance_.tRex.jumping) {
              gameLib.upDuck(_win);
            }
          }
        }
      });
    });
  });
});
