// threadDeleteApis.js
import axios from 'axios';

// Delete a thread
// Delete a thread
export const deleteThread = async (threadId) => {
    try {
      const response = await axios.delete(`/deleteThread/${threadId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
