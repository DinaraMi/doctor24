import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

export const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};