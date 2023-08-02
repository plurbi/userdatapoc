import { UserData } from "@/models/userData";


const keys = {
  userdata: "user-data-array",
  largeToken: "user-token"
};

export function saveUserData(userData: UserData): void {
  if (typeof window !== 'undefined') {
    clearLocalStorage();
    const existingDataJSON = localStorage.getItem(keys.userdata);
    const existingData: UserData[] = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    existingData.push(userData);
    localStorage.setItem(keys.userdata, JSON.stringify(existingData));
    setUserToken(userData.userToken);
  }
}

export function loadUserDataFromLocalStorage(): UserData[] {
  if (typeof window !== 'undefined') {
    const userDataJSON = localStorage.getItem(keys.userdata);
    return userDataJSON ? JSON.parse(userDataJSON) : [];
  }
  return [];
}

export function getUserByEmail(email: string): UserData | null {
  if (typeof window !== 'undefined') {
    const userDataJSON = localStorage.getItem(keys.userdata);
    const users = userDataJSON ? JSON.parse(userDataJSON) : [];


    const matchingUser = users.find((user: UserData) => user.email === email);

    if (matchingUser) {
      return matchingUser;
    }
    return null;

  } else {
    throw new Error('localStorage is not available in this environment.');
  }
}

export function clearLocalStorage(): void {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
}
export function setUserToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(keys.largeToken, token);
  }
}
export   function  getUserToken(): string | null {
  if (typeof window !== 'undefined') {
      return localStorage.getItem(keys.largeToken);
  }
  return null;
}
const getData = () => {
  return JSON.parse(window.localStorage.getItem(keys.userdata) ?? "") || [];
}

