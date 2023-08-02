import { UserData } from "./models/userData";

const keys = {
  userdata: "user-data-array"
};

export function saveData(userData: UserData): void {
  if (typeof window !== 'undefined') {
    clearLocalStorage();
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

export function getUserByEmail(email: string): UserData | null {
  if (typeof window !== 'undefined') {
    const userDataJSON = localStorage.getItem(keys.userdata);
    const users = userDataJSON ? JSON.parse(userDataJSON) : [];

    // Find the user with the matching email
    const matchingUser = users.find((user: UserData) => user.email === email);

    if (matchingUser) {
      return matchingUser;
    } else {
      // Return null if no matching user is found
      return null;
    }
  } else {
    // Handle the case when localStorage is not available (e.g., in a server-side environment)
    throw new Error('localStorage is not available in this environment.');
  }
}

export function clearLocalStorage(): void {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
}


const getData = () => {
  return JSON.parse(window.localStorage.getItem(keys.userdata) ?? "") || [];
}

