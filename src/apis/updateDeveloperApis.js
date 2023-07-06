//updateDeveloperApis.js file
import axios from "axios";

// Update developer profile
export const updateDeveloper = async (formData) => {
  try {
    const response = await axios.put("http://localhost:5000/updateProfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

