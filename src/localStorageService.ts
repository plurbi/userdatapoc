import { UserData } from "./models/userData";

const keys = {
    userdata: "user-data-array"
};

export function saveData(userData: UserData): void {
    if (typeof window !== 'undefined') {
        const existingDataJSON = localStorage.getItem(keys.userdata);
        const existingData: UserData[] = existingDataJSON ? JSON.parse(existingDataJSON) : [];
        existingData.push(userData);
        localStorage.setItem(keys.userdata, JSON.stringify(existingData));
    }
}

export function loadUserDataFromLocalStorage(): UserData[] {
    if (typeof window !== 'undefined') {
        const userDataJSON = localStorage.getItem(keys.userdata);
        return userDataJSON ? JSON.parse(userDataJSON) : [];
    }
    return [];
}



const getData = () => {
    return JSON.parse(window.localStorage.getItem(keys.userdata) ?? "") || [];
}

