from microbit import *
import radio

radio.config(channel=20, power=0, data_rate=radio.RATE_1MBIT)

radio.on()

while True:
    if button_a.was_pressed():
        radio.send('Hello, world!')
    sleep(1000)

'''
请注意，您需要将Micro:bit与电脑配对才能建立连接。
在电脑上打开蓝牙设置，并搜索可用设备。找到您的Micro:bit并配对它。
一旦连接建立，您就可以运行电脑端的代码并开始接收来自Micro:bit的数据了。'''