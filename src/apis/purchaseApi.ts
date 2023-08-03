  // Replace './types' with the correct path to the 'Purchase' type file.

import { Purchase } from "@/models/purchase";

class PurchaseAPI {
  // The base URL of your backend server
  private baseUrl = 'https://poc-be2.onrender.com';

  
   async sendPurchase(purchase: Purchase) {
    try {
      // Create the request body with the Purchase object
      const requestBody = JSON.stringify(purchase);

      // Perform the POST request to the server
      const response = await fetch(`${this.baseUrl}/purchases/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      // Check if the response was successful
      if (response.ok) {
        const data = await response.json();
        // You can process the response data here if needed
        console.log('Response data:', data);
      } else {
        // Handle the error response if the request was not successful
        console.error('Failed to send purchase:', response.statusText);
      }
    } catch (error) {
      console.error('Error while sending purchase:', error);
    }
  }
  async getAllPurchases() {
    try {
      // Perform the GET request to fetch all purchases
      const response = await fetch(`${this.baseUrl}/purchases/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response was successful
      if (response.ok) {
        const data = await response.json();
        // You can process the response data here if needed
        console.log('All Purchases:', data);
        return data;
      } else {
        // Handle the error response if the request was not successful
        console.error('Failed to get all purchases:', response.statusText);
      }
    } catch (error) {
      console.error('Error while getting all purchases:', error);
    }
  }
}


export default PurchaseAPI;
