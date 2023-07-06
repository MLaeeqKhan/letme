// repliesDeleteApis.js
import axios from 'axios';

export const deleteReplies = async (threadID) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteReplies/${threadID}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
