from microbit import *
import radio

isConnected = 0
Player = -1
radio.config(group=10)
radio.on()
while not (isConnected):
    if button_a.is_pressed() and button_b.is_pressed():
        radio.send("Con")
        message = radio.receive()
        while not message:
            message = radio.receive()
        while True:
            now = radio.receive()
            # display.scroll(str(message))
            if now:
                message = now
            else:
                break
        message = str(message)
        # display.scroll(message)
        if message.isdigit():
            display.scroll("connected")
            Player = int(message)
            isConnected = 1
        break

Game = 1

while True:
    if isConnected and Game:
        gesture = accelerometer.current_gesture()
        if gesture in ["face down", "down"]:
            radio.send("" + str(Player) + " Low")
        elif gesture == "freefall":
            radio.send("" + str(Player) + " Jump")
        elif gesture == "left":
            radio.send(str(Player)+" Acc")
        elif gesture == "right":
            radio.send(str(Player)+" StopAcc")
        else:
            radio.send(str(Player)+" Release")
        sleep(10)
