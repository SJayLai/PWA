function bleconnectfunc(){
navigator.bluetooth.requestDevice({
    optionalServices: [0xa000],
    //'713d0002-503e-4c75-ba94-3148f18d941e'
    acceptAllDevices: true//
})
.then(device => {
    console.log(device);
    bluetoothDevice = device;
    bluetoothDevice.addEventListener('gattserverdisconnected', disconnected);
    return device.gatt.connect();
})
.then(server => {
    return server.getPrimaryService(0xa000);
})
.then(service => {
    console.log(service);
    return service.getCharacteristic(0xa001);
})
.then(chara => {
    console.log(chara); 
    console.log('connected');
    chara.startNotifications().then(c => {
        c.addEventListener('characteristicvaluechanged', function(e){
        });
    })
})
.catch(error => {console.log(error.message)});
};
function disconnected(event) {
      console.log("Disconnected by remote device!");
      bluetoothDevice = null;
      connected = false;
}
