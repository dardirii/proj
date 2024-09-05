import axios from 'axios';

const BASE_URL = 'http://localhost:2000';

export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};