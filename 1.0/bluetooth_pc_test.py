import keyboard
import serial
ser=serial.Serial(baudrate=115200,port="COM4")
if not ser.is_open:
    ser.open()

while True: 
    msg=ser.readline().strip().decode()
    if msg:
        print(msg)
    if keyboard.is_pressed("space"):
        bre

ser.close()


    

ser.close()
