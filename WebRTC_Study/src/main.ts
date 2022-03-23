
if (navigator.mediaDevices) {
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(e => {
    console.log(e)
  })
}

function gotDevices (deviceInfos: MediaDeviceInfo[]) {
  deviceInfos.forEach(deviceInfo => {
    console.log(deviceInfo)
  })
}
