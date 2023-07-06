// threadDeleteApis.js
import axios from 'axios';

// Delete a thread
// Delete a thread
export const deleteThread = async (threadId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteThread/${threadId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
