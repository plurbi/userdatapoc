

import { UserData } from "@/models/userData";
import { saveUserData } from "@/services/localStorageService";


import CryptoJS from "crypto-js";
import platform from 'platform';


const getIPAddress = async () => {
  let ip: any = undefined;
  await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ip = data.ip;
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);

    });
  return ip;
}
const getGeo = (): Promise<{ lat: number; long: number }> => {
  return new Promise((resolve, reject) => {
    function success(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      resolve({ lat, long });
    }
    function error() {
      const lat = 0;
      const long = 0;
      resolve({ lat, long });
    }
    navigator.geolocation.getCurrentPosition(success, error);
  });
};
function getAvailableFonts() {
  const fontList = document.fonts;
  const fonts = Array.from(fontList).map(fontFace => fontFace.family);
  return fonts.join(',');
}
const getLocalIP = () => {
  return new Promise((resolve, reject) => {
    const rtcConfig = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    const pc = new RTCPeerConnection(rtcConfig);

    pc.createDataChannel('');
    pc.createOffer()
      .then(sdp => pc.setLocalDescription(sdp))
      .catch(reject);

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        const candidate = event.candidate.candidate;
        const localIP = candidate.split(' ')[3];
        console.log('candidate', candidate);
        resolve(localIP);
        pc.close();
      }
    };
  });
}
const setUserData = async (email: string) => {

  //  const localIP = await getLocalIP()
  //   .then(localIP => localIP)
  //   .catch(err => console.error("Error getting local IP:", err));

  const geoData = await getGeo();
  const ipData = await getIPAddress();
  const userdata = new UserData();

  userdata.deviceScreenSizeHeight = window.screen.height;
  userdata.deviceScreenSizeWidth = window.screen.width;
  userdata.location = window.origin;
  userdata.publicIP = ipData;
  userdata.latitude = geoData.lat;
  userdata.longitude = geoData.long;
  userdata.email = email;
  userdata.platformResume = JSON.stringify(platform);
  userdata.platformDescription = platform.description;
  userdata.platformName = platform.name;
  userdata.osArchitecture = platform.os?.architecture;
  userdata.architectureFamily = platform.os?.family;
  userdata.architectureVersion = platform.os?.version;
  userdata.browserVersion = platform.version;
  userdata.colorDepth = screen.colorDepth;
  userdata.logicalProcessors = navigator.hardwareConcurrency;
  userdata.accelerometer = 'DeviceMotionEvent' in window;
  userdata.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  saveUserData(userdata);
}

export { setUserData };