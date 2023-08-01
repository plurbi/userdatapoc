import { UserData } from "./models/userData";

const keys = {
    userdata: "user-data-array"
};

export function saveData(userData: UserData): void {
    const existingDataJSON = localStorage.getItem(keys.userdata);
    const existingData: UserData[] = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    const userFound = existingData.find(x => x.email === userData.email);

    
        existingData.push(userData);
        localStorage.setItem(keys.userdata, JSON.stringify(existingData));
     
}

export function loadUserDataFromLocalStorage(): UserData[] {
    const userDataJSON = localStorage.getItem(keys.userdata);
    return userDataJSON ? JSON.parse(userDataJSON) : [];
}



const getData = () => {
    return JSON.parse(window.localStorage.getItem(keys.userdata) ?? "") || [];
}

