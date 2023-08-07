
import CryptoJS from "crypto-js";

export class UserData {
    userToken?: string;
    connectionType?: string;
    isMobile?: boolean;
    platform?: string;
    deviceScreenSizeHeight?: number;
    deviceScreenSizeWidth?: number;
    location?: string;
    publicIP?: string;
    localIP?: string;
    latitude?: number;
    longitude?: number;
    email?: string;
    platformResume?: string;
    platformDescription?: string;
    platformName?: string;
    osArchitecture?: number;
    architectureFamily?: string;
    architectureVersion?: string;
    browserVersion?: string;
    colorDepth?: number;
    logicalProcessors?: number;
    timeZone?: string;
    accelerometer?: boolean;
    giroscope?: boolean;

   
    concatenateAndEncrypt = (...strings: (string | undefined)[]) => {
        const combinedString = strings.join('');
        const encrypted = CryptoJS.SHA256(combinedString).toString();

        return encrypted;
    }
    trueFalse = (value:boolean | undefined):string => {
        return value ? "true" : "false";
    }
    generateToken(){
        this.userToken = this.concatenateAndEncrypt(this.publicIP,
            this.deviceScreenSizeHeight?.toString(),
            this.deviceScreenSizeWidth?.toString(),
            this.latitude?.toString(),
            this.longitude?.toString(),
            this.colorDepth?.toString(),
            this.location?.toString(),
            this.platformResume?.toString(),
            this.architectureFamily,
            this.architectureVersion, 
            this.browserVersion,
            this.logicalProcessors?.toString(),
            this.timeZone,
            this.trueFalse(this.accelerometer),
            this.trueFalse(this.giroscope)
        );
    }
}
