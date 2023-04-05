import bluetooth

server_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
server_sock.bind(("", bluetooth.PORT_ANY))
server_sock.listen(1)

port = server_sock.getsockname()[1]

uuid = "00001101-0000-1000-8000-00805F9B34FB"
'''如果您没有在Micro:bit上设置UUID，
则可以在电脑端的代码中将UUID设置为任何值。
UUID只是用于标识蓝牙服务的唯一标识符。如果没有设置UUID，则会自动生成一个随机的UUID。'''


bluetooth.advertise_service(server_sock, "SampleServer",
                            service_id=uuid,
                            service_classes=[uuid, bluetooth.SERIAL_PORT_CLASS],
                            profiles=[bluetooth.SERIAL_PORT_PROFILE])

print("Waiting for connection on RFCOMM channel", port)

client_sock, client_info = server_sock.accept()
print("Accepted connection from", client_info)

while True:
    data = client_sock.recv(1024)
    if not data:
        break
    print("Received", data)

client_sock.close()
server_sock.close()
