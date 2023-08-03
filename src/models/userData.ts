export type UserData = {   
    userToken:string;
    connectionType?:string;
    isMobile?:boolean; // navigator['userAgentData'].mobile experimental
    platform?:string; // navigator.platform
    deviceScreenSizeHeight?:number; //window.screen.height
    deviceScreenSizeWidth?:number; //window.screen.width
    location?:string; // window.origin ej: www.localhost:3000
    publicIP?:string;
    latitude?:number;
    longitude?:number;
    email?:string;
    platformResume?:string;
    platformDescription?:string;
    platformName?:string;
    osArchitecture?:number;
    architectureFamily?:string;
    architectureVersion?:string;
    browserVersion?:string;
    colorDepth?:number;
    logicalProcessors?:number;
}