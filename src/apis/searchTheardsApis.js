// saerchThreadApis.js
import axios from 'axios';

export const getThreads = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getThreads');
      return response.data.threads;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch threads');
    }
  };

export const searchThreads = async (text) => {
    console.log('searchThreadApis');

    try {
      const response = await axios.get(`http://localhost:5000/search?text=${text}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to search threads');
    }
  };