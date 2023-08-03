export type Purchase = {
    userToken?:string | null;
    publicIp:string | undefined;
    productToken:string;
    productName:string;    
    email:string | undefined;
} 