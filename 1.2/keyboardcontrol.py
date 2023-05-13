import time
import keyboard
import serial
ser = serial.Serial(port="COM3", baudrate=115200)
'''define key bindings
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
// l key: stop accelerating 0
// o key: stop accelerating 1
// u key: stop accelerating 2
// m key: stop accelerating 3
// down arrow key: stop ducking 0
// a key: stop ducking 1
// s key: stop ducking 2
// d key: stop ducking 3'''
key = {"1": ["up", "down", "p", "l"], "2": ["q", "a", "i", "o"],
       "3": ["w", "s", "j", "u"], "4": ["space", "d", "k", "m"]}
# isLow=[False]*4
if not ser.is_open:
    ser.open()
cnt = 0
lowtime = [0, 0, 0, 0, 0]
islow = [0, 0, 0, 0, 0]
jumptime = [0, 0, 0, 0, 0]
isjump = [0, 0, 0, 0, 0]

while True:
    message = ser.readline().strip().decode()
    if message:
        cnt += 1
        # 注意，microbit的left、right颠倒了，故这了的acc和stopacc颠倒
        if message == "Con":
            print("ERROR!")
            break
        message = message.split()
        # if message[1]!="Release":print(cnt,message)
        id = int(message[0])
        if message[1] == "Jump":
            if isjump[id] == 0:
                keyboard.send(key[message[0]][0])
                isjump[id] = 1
                jumptime[id] = time.time()
        elif message[1] == "Low":
            keyboard.press(key[message[0]][1])
            lowtime[id] = time.time()
            islow[id] = 1
            # lowcnt[int(message[0])]=0
        elif message[1] == "Acc":
            keyboard.send(key[message[0]][3])
        elif message[1] == "StopAcc":
            keyboard.send(key[message[0]][2])
        if message[1] != "Low":
            islow[id] = 0
    # if message:
    #     cnt+=1
    #     print(cnt,message)
    # time.sleep(0.05)
    # print(lowtime,islow)
    for i in range(1, 5):
        if islow[i] == 0 and time.time()-lowtime[i] > 0.011:
            # BUG! : 多人小恐龙会存在串口传输的问题，控制每个小恐龙俯身的时间戳消除掉帧
            keyboard.release(key[str(i)][1])
            # if i==1:print("YES")
        if isjump[i] == 1 and time.time()-jumptime[i] > 0.5:
            isjump[i] = 0
