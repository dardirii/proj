import axios from 'axios';

const BASE_URL = 'http://localhost:2000';

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/account`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};