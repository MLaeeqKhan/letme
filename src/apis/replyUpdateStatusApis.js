//replyUpdateStatusApis.js file
import axios from "axios";

// Update a reply
console.log('Update a reply');
export const updateReply = async (id, status) => {
  const response = await axios.put(`/updateReply/${id}`, { status });
  return response.data;
};
