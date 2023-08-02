import { Purchase } from "@/models/purchase";
import { getUserToken } from "./localStorageService";

const keys = {
    purchaseList: "purchase-list"
};

export function purchaseProduct(purchase: Purchase): void {
    if (typeof window !== 'undefined') {
        purchase.userToken = getUserToken();
        const existingDataJSON = localStorage.getItem(keys.purchaseList);
        const existingData: Purchase[] = existingDataJSON ? JSON.parse(existingDataJSON) : [];
        existingData.push(purchase);
        localStorage.setItem(keys.purchaseList, JSON.stringify(existingData));
    }
}

export function getPurchases(): Purchase[] {
    if (typeof window !== 'undefined') {
        const userDataJSON = localStorage.getItem(keys.purchaseList);
        return userDataJSON ? JSON.parse(userDataJSON) : [];
    }
    return [];
}