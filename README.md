## 项目简介
这个项目旨在使用 micro:bit 和 Flask 来实现一个多人联机的小恐龙游戏，通过 micro:bit 的重力传感器检测玩家的动作，模拟小恐龙的弯腰和跳起动作，同时支持多个玩家在线游戏。

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