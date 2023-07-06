// threadUpdateApis.js file
import axios from "axios";

// Update a thread
export const updateThread = async (id, threadTitle, threadDesc) => {
  const data = await axios.put(`http://localhost:5000/updateThread/${id}`, { threadTitle, threadDesc });
  return data;
};

