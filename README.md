<div style="text-align:center">
  <img src="/1.1/Icon.png" class="img-fluid" width="400">
</div>

## 项目简介

想象一下，您和您的朋友们可以使用 micro:bit 和 Flask 实现一个充满乐趣和惊喜的多人联机小恐龙游戏！该游戏通过 micro:bit 的重力传感器来检测您的动作，从而模拟小恐龙的弯腰和跳起动作。而且，这个游戏支持多个玩家同时在线游戏，您可以与您的朋友一起玩这个令人兴奋的游戏！
您可以在游戏过程中进行如下操作:
- 跳跃  玩家跳起至一定高度，模拟小恐龙的跳跃动作
- 弯腰  玩家上半身前倾90度，模拟小恐龙的弯腰动作
- 使用技能  在多人模式中，玩家通过身体向左或向右转动45-90度以释放技能；技能效果：使剩余几位玩家的小恐龙加速度增加1.5倍

本项目分为四个主要步骤，包括准备工作、实现单人版小恐龙游戏、实现多人版小恐龙游戏和完善游戏功能。每个步骤都有详细的说明和具体实现任务，详见 Roadmap.MD。项目采用 GPL-3 开源协议。

## 使用方式

- 克隆本仓库至本地
```bash
git clone https://github.com/TheUnknownThing/dino-bit.git
```

- 安装必要的 Python 库
```bash
pip install -r requirements.txt
```

- 运行 Flask 应用程序
```bash
python http-server.py
```
在浏览器中输入 http://localhost:8088 进入游戏页面

## 贡献者
TheUnknownThing, VitalRubbish, LJA001125, cyn

## 版权和许可
本项目采用 GPL-3 开源协议，详见 LICENSE.md 文件。