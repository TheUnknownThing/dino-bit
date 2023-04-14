from time import sleep
import keyboard
import serial
ser=serial.Serial(port="COM4",baudrate=115200)
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
// down arrow key: stop ducking 0
// a key: stop ducking 1
// s key: stop ducking 2
// d key: stop ducking 3'''
key={"1":["up","down","p"],"2":["q","a","i"],"3":["w","s","j"],"4":["space","d","k"]}
isLow=[False]*4
if not ser.is_open:
    ser.open()


while True:
    message=ser.readline().strip().decode()
    if message:
        print(message)
        message=message.split()
        if message[1]=="Jump":
            keyboard.send(key[message[0]][0])
        elif message[1]=="Low":
            keyboard.press(key[message[0]][1])
            sleep(0.055)
            keyboard.release(key[message[0]][1])
        elif message[1]=="Acc":
            keyboard.send(key[message[0]][2])
