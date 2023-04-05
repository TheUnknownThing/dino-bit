var gameLib = require("./libs/gameLib.js");
var setZeroTimeout = require("./libs/zeroTimeout.js");

var gameStates = [
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null },
  { tRex: null, obstacles: [], gameOverPanel: null }
];

setTimeout(function () {
  /**
   * 创建对应数目的小恐龙游戏iframe
   */
  gameLib.createIframe(4);
  gameLib.eachIframe(function (_win){
    gameLib.pressJump(_win);
  });
  setTimeout(function () {
    /**
     * 让游戏启动起来
     */
    gameLib.eachIframe(function (_win) {
      gameStates[_win.index].tRex = _win.Runner.instance_.tRex;
      gameStates[_win.index].gameOverPanel =
        _win.document.querySelector(".gameover-panel");
      gameLib.pressJump(_win);
    });

    document.addEventListener("keydown", function (event) {
      var key = event.key;
      switch (key) {
        case "1":
          gameLib.pressJump(gameLib.getIframe(0));
          break;
        case "2":
          gameLib.pressJump(gameLib.getIframe(1));
          break;
        case "3":
          gameLib.pressJump(gameLib.getIframe(2));
          break;
        case "4":
          gameLib.pressJump(gameLib.getIframe(3));
          break;
      }
    });

    setZeroTimeout(function () {
      gameLib.eachIframe(function (_win, _index) {
        /**
         * 当小恐龙游戏结束时进行记录最高分
         */
        if (_win.Runner.instance_.crashed) {
          if (gameStates[_index].gameOverPanel.style.display !== "none") {
            var tempHighestScore = Number(
              _win.Runner.instance_.distanceMeter.digits.join("")
            );
            if (tempHighestScore > HighestScore) {
              HighestScore = tempHighestScore;
            }
          }
          return;
        }

        setZeroTimeout(function (){
            gameLib.eachIframe(function (_win, _index){

                if(_win.Runner.instance_.crashed){
                    if(G_deaded.indexOf(_index) == -1){
                        brainAIs.setBrainScore(_index, Math.ceil(_win.Runner.instance_.distanceRan));
                        var tempHighestScore = Number(_win.Runner.instance_.distanceMeter.digits.join(""));
                        if(tempHighestScore > HighestScore){
                            HighestScore = tempHighestScore;
                        }
                        G_deaded.push(_index);
                    }
                    return;
                }

                /**
                 * 判断键盘输入，控制小恐龙的动作
                 */
                var nowState = [     _win.Runner.instance_.tRex.jumping ? 1 : 0,     !_win.Runner.instance_.tRex.ducking && !_win.Runner.instance_.tRex.jumping ? 1 : 0,     _win.Runner.instance_.tRex.ducking ? 1 : 0, ];

                var controllerAIInput = [0, 0, 0].concat(nowState);

                if (_index === 0) {
                    if (window.event.keyCode == 81) { // Q键控制跳跃
                        gameLib.pressJump(_win);
                    } else if (window.event.keyCode == 87) { // W键控制下蹲
                        gameLib.downDuck(_win);
                    }
                    if (
                        window.event.keyCode == 69
                        && _win.Runner.instance_.tRex.ducking
                        && !_win.Runner.instance_.tRex.jumping
                    ) { // E键控制从下蹲状态恢复
                        gameLib.upDuck(_win);
                    }
                } else if (_index === 1) {
                    if (window.event.keyCode == 73) { // I键控制跳跃
                        gameLib.pressJump(_win);
                    } else if (window.event.keyCode == 79) { // O键控制下蹲
                        gameLib.downDuck(_win);
                    }
                    if (
                        window.event.keyCode == 80
                        && _win.Runner.instance_.tRex.ducking
                        && !_win.Runner.instance_.tRex.jumping
                    ) { // P键控制从下蹲状态恢复
                        gameLib.upDuck(_win);
                    }
                } else if (_index === 2) {
                    if (window.event.keyCode == 74) { // J键控制跳跃
                        gameLib.pressJump(_win);
                    } else if (window.event.keyCode == 75) { // K键控制下蹲
                        gameLib.downDuck(_win);
                    }
                    if (
                        window.event.keyCode == 76
                        && _win.Runner.instance_.tRex.ducking
                        && !_win.Runner.instance_.tRex.jumping
                    ) { // L键控制从下蹲状态恢复
                        gameLib.upDuck(_win);
                    }
                }
                if(controllerAIOutput[2] > 0.5){
                    gameLib.downDuck(_win);
                }
                
                if(
                    controllerAIOutput[1] > 0.5 
                    && _win.Runner.instance_.tRex.ducking
                    && !_win.Runner.instance_.tRex.jumping
                ){
                    gameLib.upDuck(_win);
                }
    
                if(controllerAIOutput[0] > 0.5){
                    gameLib.pressJump(_win);
                }
    
    
            });
        }, 10);
    });

});
}, 8000);
});