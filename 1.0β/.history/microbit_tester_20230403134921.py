from microbit import *
import bluetooth
import webbrowser

# 打开Chrome浏览器并导航到小恐龙游戏
url = 'chrome://dino'
webbrowser.open(url)

# 初始化蓝牙服务和特征UUID
SERVICE_UUID = bluetooth.UUID('6E400001-B5A3-F393-E0A9-E50E24DCCA9E')
CHAR_UUID_RX = bluetooth.UUID('6E400002-B5A3-F393-E0A9-E50E24DCCA9E')
CHAR_UUID_TX = bluetooth.UUID('6E400003-B5A3-F393-E0A9-E50E24DCCA9E')

# 创建蓝牙特征和服务对象
ble = bluetooth.BLE()
ble.config(gap_name='microbit', gap_advertise_interval=100)
ble_hs = ble.security_manager
ble_srv = bluetooth.Service(SERVICE_UUID, True)
char_rx = ble_srv.characteristic(CHAR_UUID_RX, bluetooth.FLAG_WRITE)
char_tx = ble_srv.characteristic(CHAR_UUID_TX, bluetooth.FLAG_NOTIFY)

# 定义处理接收数据的回调函数
def handle_rx(char):
    global jumping
    data = char.value().decode().strip()
    if data == 'JUMP':
        jumping = True

# 将回调函数注册到蓝牙特征上
char_rx.callback(trigger=bluetooth.CHAR_WRITE_EVENT, handler=handle_rx)

# 启动蓝牙广播和服务
ble.gap_advertise()

# 设定控制敏感度和阈值
SENSITIVITY = 200
JUMP_THRESHOLD = 800

# 初始化跳跃变量
jumping = False
jump_timer = 0

while True:
    # 用手势判断是否左转/右转，是否弯腰/起身
    gesture = accerlerometer.current_gesture()

    # 如果完全弯腰，即为腰彻底90度弯曲
    if gesture in ["face down", "down"]:


    # 如果正在跳跃，则模拟跳跃动作
    if gesture == "freefall":

        jump_timer += 1

    # 发送速度信号到模拟键盘模块
    if not jumping:
        keyboard.send(Keycode.UP, speed_y)
        keyboard.send(Keycode.SPACE, speed_x)

    # 休眠一段时间以减少CPU负载
    sleep(50)
