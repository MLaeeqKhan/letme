// threadUpdateApis.js file
import axios from "axios";

// Update a thread
export const updateThread = async (id, threadTitle, threadDesc) => {
  const data = await axios.put(`/updateThread/${id}`, { threadTitle, threadDesc });
  return data;
};

