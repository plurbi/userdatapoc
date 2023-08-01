
import { saveData } from "@/localStorageService";
import { UserData } from "../../models/userData";
import { DeviceUUID } from "device-uuid";
import CryptoJS from "crypto-js";



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
const setUserData = async (email: string) => {

  var uuid = new DeviceUUID();
  console.log('window', window);
  console.log('navigator', navigator);

  const geoData = await getGeo();
  const userdata: UserData = { userToken : concatenateAndEncrypt(window.screen.height.toString(), window.screen.width.toString())};
 
  // userdata.connectionType = navigator.connection.effectiveType;
  // userdata.platform = navigator.userAgentData.platform;
  // userdata.isMobile = navigator.userAgentData.mobile;
  userdata.deviceScreenSizeHeight = window.screen.height;
  userdata.deviceScreenSizeWidth = window.screen.width;
  userdata.location = window.origin;
  userdata.publicIP = await getIPAddress();
  userdata.latitude = geoData.lat;
  userdata.longitude = geoData.long;
  userdata.email = email;

console.log('ud', userdata);
   
  saveData(userdata);
}
const concatenateAndEncrypt = (...strings: string[]): string => {
  const combinedString = strings.join('');
  const encrypted = CryptoJS.SHA256(combinedString).toString();
 
  return encrypted;
}
export { setUserData };