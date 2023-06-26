// saerchThreadApis.js
import axios from 'axios';

export const getThreads = async () => {
    try {
      const response = await axios.get('/getThreads');
      return response.data.threads;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch threads');
    }
  };

export const searchThreads = async (text) => {
    console.log('searchThreadApis');

    try {
      const response = await axios.get(`/search?text=${text}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to search threads');
    }
  };