from microbit import *import radio# import serial# ser = serial.Serial('COM4', 115200)Game = 0cntPlayer = 0radio.config(group=10)radio.on()while not (Game):    message=radio.receive()    if message=="Con":        if cntPlayer<4:            radio.send(str(cntPlayer+1))            cntPlayer+=1            display.scroll(str(cntPlayer))        else:            display.scroll("Too many players")    if button_a.is_pressed() and button_b.is_pressed():        Game = 1display.scroll("Ready Go!")que=[0,0,0,0,0,0]head=0tail=0while True:    # for i in range(cntPlayer):    #     message=radio.receive()    #     if message:    #         print(message)    #     else:break    # message=radio.receive()    # if message:print(message)    # def count(a,b,c):    #     if b>a:return b-a    #     return b-a+c    # o=0    # while count(head,tail,cntPlayer)<cntPlayer:    #     o+=1    #     if o>10:break    #     message=radio.receive()    #     if message:    #         que[tail]=message    #         tail=(tail+1)%cntPlayer    # while head!=tail:    #     print(que[head])    #     head=(head+1)%cntPlayer    o=0    q=[]    while len(q)<cntPlayer*2:        o+=1        if o>20*(cntPlayer+1):break        message=radio.receive()        if message:            q.append(message)    for i in q:print(i)    sleep(10)