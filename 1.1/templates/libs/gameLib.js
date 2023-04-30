(function ()
{
    var gameLib = {};
    iframeList = [];

    /**
     * 操控每一个iframe
     */
    gameLib.eachIframe = function (_do){
        for(var i = 0; i < iframeList.length; i++){
            _do(iframeList[i].contentWindow, i);
        }
    }

    gameLib.specificIframe = function (_do,_index){
        _do(iframeList[_index].contentWindow, _index);
    }

    gameLib.exceptspecificIframe = function (_do,_index){
        for(var i = 0; i < iframeList.length; i++){
            if ( i != _index){
                _do(iframeList[i].contentWindow, i);
            }
        }
    }

    /**
     * 让对应iframe的小恐龙跳起来
     */
    gameLib.pressJump = function (_win)
    {
        _win.Runner.instance_.onKeyDown (
            {
                keyCode: 38,
                target: 1
            }
        );
    }

    gameLib.downDuck = function (_win)
    {
        _win.Runner.instance_.onKeyDown(
            {
                keyCode: 40,
                target: 1,
                preventDefault: function (){}
            }
        );
    }

    gameLib.upDuck = function (_win)
    {
        _win.Runner.instance_.onKeyUp(
            {
                keyCode: 40,
                target: 1,
                preventDefault: function (){}
            }
        );
    }

    gameLib.accelerate = function (_win)
    {
        _win.Runner.instance_.onKeyDown(
            {
                keyCode: 107,
                target: 1,
                preventDefault: function(){}
            }
        )
    }

    gameLib.stopaccelerate = function (_win)
    {
        _win.Runner.instance_.onKeyDown(
            {
                keyCode: 109,
                target: 1,
                preventDefault: function(){}
            }
        )
    }

    /**
     * 重启某个iframe的小恐龙游戏
     */
    gameLib.restart = function (_win)
    {
        _win.Runner.instance_.onKeyUp(
            {
                type: "mouseup",
                target: _win.Runner.instance_.canvas,
                button: 1
            }
        );
    }

    /**
     * 判断是不是所有iframe的小恐龙游戏都结束了
     */
    gameLib.isAllEnd = function (){
        var alive = false;
        this.eachIframe(function (_win){
            if(!_win.Runner.instance_.crashed){
                alive = true;
            }
        });
        return !alive;
    }

    // get the score of the game
    gameLib.getScore = function ()
    {
        var score = []
        this.eachIframe(function (_win){
            score.push(_win.Runner.instance_.distanceRan / 40);
        });
        return score;
    }

    /**
     * 获取障碍物的一些属性,要是没有这个障碍物的话,所有属性都返回0
     */
    gameLib.getObstaclesAttr = function (_win, _index, _attrs)
    {
        var lenOfAttrs = _attrs.length;
        var attrObj = {};
        for(var i = 0; i < lenOfAttrs; i++){
            var theRes = 0;
            if(typeof _win.Runner.instance_.horizon.obstacles[_index] != typeof UDFUDFUDF){
                var theObstacle = _win.Runner.instance_.horizon.obstacles[_index];
                theRes = theObstacle[_attrs[i]];
            }
            attrObj[_attrs[i]] = theRes;
        }
        return attrObj;
    }

    gameLib.createIframe = function (_num) {
        // Create iframes and append them to the body, making them centered.
        var body = document.getElementsByTagName('body')[0];
        for (var i = 0; i < _num; i++) {
            var iframe = document.createElement('iframe');
            iframe.src = "game.html";
            iframe.setAttribute("frameborder", "0");
            iframe.style.position = "absolute";
            iframe.style.left = "50%";
            iframe.style.marginLeft = "-300px";
            iframe.style.top = (i * 200) + "px";
            iframe.style.marginTop = "50px";
            iframe.style.width = "600px";
            iframeList.push(iframe);
            
            // Create and append text to show the index of the iframe
            var indexText = document.createElement('p');
            indexText.innerHTML = 'Player ' + (i+1);
            indexText.style.fontSize = "20px";
            indexText.style.position = 'absolute';
            indexText.style.left = '50%';
            indexText.style.transform = 'translateX(-50%)';
            indexText.style.top = (i * 200 + 200) + 'px';
            body.appendChild(iframe);
            body.appendChild(indexText);
        }
    }
    

    // Create iframes and append them to the body.
    gameLib.createIframeOld = function (_num)
    {
        var body = document.getElementsByTagName('body')[0];
        for(var i = 0; i < _num; i++){
            var iframe = document.createElement('iframe');
            iframe.src="game.html";
            iframe.setAttribute("frameborder", "0");
            iframeList.push(iframe);
            body.appendChild(iframe);
        }
    }

    module.exports = gameLib;
})()