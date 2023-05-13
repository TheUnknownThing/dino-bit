from microbit import *
import radio
# import serial

# ser = serial.Serial('COM4', 115200)

Game = 0
cntPlayer = 0
radio.config(group=10)
radio.on()
while not (Game):
    message=radio.receive()
    if message=="Con":
        if cntPlayer<4:
            radio.send(str(cntPlayer+1))
            cntPlayer+=1
            display.scroll(str(cntPlayer))
        else:
            display.scroll("Too many players")
    if button_a.is_pressed() and button_b.is_pressed():
        Game = 1
display.scroll("Ready Go!")
while True:
    message=radio.receive()
    if message:
        print(message)
    sleep(15)