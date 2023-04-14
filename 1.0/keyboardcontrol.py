from time import sleep
import keyboard
import serial
ser=serial.Serial(port="COM4",baudrate=115200)
key={"1":["up","down"],"2":["q","a"],"3":["w","s"],"4":["e","d"]}
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
