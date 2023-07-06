// repliesDeleteApis.js
import axios from 'axios';

export const deleteReplies = async (threadID) => {
    try {
      const response = await axios.delete(`/deleteReplies/${threadID}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
